import React from 'react'
import { LoginPage } from '../../pages/Login/LoginPage'
import { useAuth } from '../../context/useAuth'
import { useAppNavigation } from '../../hooks/useAppNavigation'

export default function LoginScreen() {
  const { loginUser } = useAuth()
  
  const handleGoogleLogin = () => {  
    console.log("Clickou google!")
  }

  const handleAppleLogin = () => {
    console.log("Clickou Apple")
  }

  const handleEmailLogin = async (email: string, senha: string) => {
    try {
      await loginUser(email, senha)
    } catch (error) {
      console.log("ERRO NO HANDLE EMAIL: ", error)
    }
  }
  
  return (
    <LoginPage
      onGoogleLogin={handleGoogleLogin}
      onAppleLogin={handleAppleLogin}
      onEmailLogin={handleEmailLogin}
    />
  )
}
