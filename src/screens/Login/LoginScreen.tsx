import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LoginPage } from '../../pages/Login/LoginPage'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/types/RootStackList'

type Navigation = NativeStackNavigationProp<RootStackParamList, 'home'>

export default function LoginScreen() {
  const { navigate } = useNavigation<Navigation>()
  
  const handleGoogleLogin = () => {  
    console.log('Clicou no botão de Google')
    navigate('home')
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
