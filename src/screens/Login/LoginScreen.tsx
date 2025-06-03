import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LoginPage } from '../../pages/Login/LoginPage'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/types/RootStackList'
import { useAuth } from '../../context/useAuth'

type Navigation = NativeStackNavigationProp<RootStackParamList, 'home'>

export default function LoginScreen() {
  const { navigate } = useNavigation<Navigation>()
  const { loginUser } = useAuth()
  
  const handleGoogleLogin = () => {  
    navigate('home')
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
