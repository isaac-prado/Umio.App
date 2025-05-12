import React from 'react'
import { LoginPage } from '../../pages/Login/LoginPage'
import { useAppNavigation } from '../../hooks/useAppNavigation'

export default function LoginScreen() {
  const { navigate } = useAppNavigation()
  
  const handleGoogleLogin = () => {  
    console.log('Clicou no botão de Google')
  }

  const handleEmailLogin = () => {
    console.log("Clickou email")
  }

  const handleAppleLogin = () => {
    console.log("Clickou Apple")
  }

  return (
    <LoginPage
      onGoogleLogin={handleGoogleLogin}
      onAppleLogin={handleAppleLogin}
      onEmailLogin={handleEmailLogin}
    />
  )
}
