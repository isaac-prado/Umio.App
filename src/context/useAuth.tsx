import { createContext, ReactNode, useEffect, useState } from "react";
import { useAppNavigation } from "../hooks/useAppNavigation";
import { loginApi } from "../services/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { jwtDecode } from "jwt-decode";

type jwtPayload = {
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata": string;
  email?: string;
  exp?: string;
};

type UserContextType = {
  token: string | null;
  clienteId: string | null;
  loginUser: (email: string, senha: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
  isReady: boolean;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [clienteId, setClienteId] = useState<string | null>(null);

  useEffect(() => {
    const loadFromStorage = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("@Umio:token");
        if (storedToken) {
          const decodedJwt = jwtDecode<jwtPayload>(
            storedToken.replace("Bearer ", ""),
          );
          console.log("O TOKEN DECODIFICADO: ", decodedJwt);
          const clienteIdFromToken =
            decodedJwt[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata"
            ];
          console.log("CLIENTEID EXTRAIDO DO TOKEN: ", clienteIdFromToken);
          setClienteId(clienteIdFromToken);
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

  const loginUser = async (email: string, senha: string) => {
    try {
      const response = await loginApi(email, senha);
      if (response?.data?.ok) {
        const jwt = response.data.dados;
        const bearerToken = `Bearer ${jwt}`;
        await AsyncStorage.setItem("@Umio:token", bearerToken);
        setToken(bearerToken);

        const decoded = jwtDecode<jwtPayload>(jwt);
        setClienteId(
          decoded[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata"
          ],
        );
        const { navigate } = useAppNavigation();
        navigate("Home");
      } else {
        throw new Error("Email ou senha incorretos!");
      }
    } catch (error) {
      throw new Error("Erro no LoginUser");
    }
  };

  const logout = () => {
    AsyncStorage.removeItem("@Umio:token");
    setToken(null);
    setClienteId(null);

    const { navigate } = useAppNavigation();
    navigate("Splash");
  };

  const isLoggedIn = () => {
    console.log("IS LOGGED IN");
    console.log(token !== null);
    return token !== null;
  };

  return (
    <UserContext.Provider
      value={{ loginUser, logout, isLoggedIn, token, isReady, clienteId }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
