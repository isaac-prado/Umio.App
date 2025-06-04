import React from "react";
import { LoginPage } from "../../pages/Login/LoginPage";
import { useAuth } from "../../context/useAuth";
import Toast from "react-native-toast-message";
import { AxiosError } from "axios";

export default function LoginScreen() {
  const { loginUser } = useAuth();

  const handleGoogleLogin = () => {
    console.log("Clickou google!");
  };

  const handleAppleLogin = () => {
    console.log("Clickou Apple");
  };

  const handleEmailLogin = async (email: string, senha: string) => {
    try {
      await loginUser(email, senha);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Login Incorreto!",
        text2: "Verifique suas credenciais e tente novamente",
        position: "top",
      });
    }
  };

  return (
    <LoginPage
      onGoogleLogin={handleGoogleLogin}
      onAppleLogin={handleAppleLogin}
      onEmailLogin={handleEmailLogin}
    />
  );
}
