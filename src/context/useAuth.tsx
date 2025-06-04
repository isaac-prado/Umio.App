import { createContext, ReactNode, useEffect, useState } from "react"
import { useAppNavigation } from "../hooks/useAppNavigation"
import { loginApi } from "../services/login"
import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"

type UserContextType = {
    token: string | null
    loginUser: (email: string, senha: string) => void
    logout: () => void
    isLoggedIn: () => boolean
    isReady: boolean
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC<{ children: ReactNode }> = ({
   children 
  }) => {
    const [token, setToken] = useState<string | null>(null)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
    const loadFromStorage = async () => {
      console.log("entrou no loadFromStorage")
      try {
        const storedToken = await AsyncStorage.getItem("@Umio:token");
        console.log("loadFromStorage: pegou o token: ", storedToken)
        if (storedToken) {
          setToken(storedToken);
          console.log("loadFromStorage: setou o stoken")
        }
      } catch (err) {
        console.error("Erro ao carregar token do AsyncStorage:", err);
      } finally {
        console.log("setIsReady true!")
        setIsReady(true);
      }
    };
    loadFromStorage();
  }, []);

    const loginUser = async (
        email: string,
        senha: string
    ) => {
        try {
            console.log("loginUser chamado: ", email, senha)
            const response = await loginApi(email, senha)
            if (response && response.data && response.data.ok) {
                const jwt = response.data.dados
                const bearerToken = `Bearer ${jwt}`
                await AsyncStorage.setItem("@Umio:token", bearerToken)
                setToken(bearerToken)

                const { navigate } = useAppNavigation()
                navigate('Home')
            } else {
                throw new Error("Autenticação inválida")
            }

        } catch (error) {
            console.error("Erro no loginUser: ", error);
            throw new Error("Erro no loginUser");
        }
    }

    const logout = () => {
      console.log("LOGOUT")
        AsyncStorage.removeItem("@Umio:token")
        setToken(null)
        const { navigate } = useAppNavigation()
        navigate('Splash')
    }

    const isLoggedIn = () => {
      console.log("IS LOGGED IN")
      console.log(token !== null)
      return token !== null
    }

    return (
      <UserContext.Provider value={{ loginUser, logout, isLoggedIn, token, isReady }}>
        {children}
      </UserContext.Provider>
    )
}

export const useAuth = () => React.useContext(UserContext)
