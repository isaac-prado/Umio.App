import { createContext, ReactNode, useEffect, useState } from "react"
import { Cliente } from "../interface/Cliente"
import { useAppNavigation } from "../hooks/useAppNavigation"
import { loginApi } from "../services/login"
import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"

type UserContextType = {
    token: string | null
    loginUser: (email: string, password: string) => void
    logout: () => void
    isLoggedIn: () => boolean
}

type Props = { children: ReactNode }

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC<Props> = ({ children }) => {
    const { navigate } = useAppNavigation()
    const [token, setToken] = useState<string | null>(null)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
    const loadFromStorage = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("@Umio:token");
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (err) {
        console.error("Erro ao carregar token do AsyncStorage:", err);
      } finally {
        setIsReady(true);
      }
    };
    loadFromStorage();
  }, []);

    const loginUser = async (
        email: string,
        password: string
    ) => {
        try {
            const response = await loginApi(email, password)
            if (response) {
                const jwt = response.data.dados
                const bearerToken = `Bearer ${jwt}`

                await AsyncStorage.setItem("@Umio:token", bearerToken)
                setToken(bearerToken)

                navigate('home')
            } else {
                throw new Error("Autenticação inválida")
            }

        } catch (error) {
            console.error("Erro no loginUser: ", error);
            throw new Error("Erro no loginUser");
        }
    }

    const logout = () => {
        AsyncStorage.removeItem("@Umio:token")
        setToken(null)
        navigate('splash')
    }

    const isLoggedIn = () => {
        return token !== null
    }

    return (
      <UserContext.Provider value={{ loginUser, logout, isLoggedIn, token }}>
        {children}
      </UserContext.Provider>
    )
}

export const useAuth = () => React.useContext(UserContext)
