import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LoginPage } from '../../pages/Login/Login'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/types/RootStackList'

type Navigation = NativeStackNavigationProp<RootStackParamList, 'home'>

export default function LoginScreen() {
  const { navigate } = useNavigation<Navigation>()
  
  const handleGoogleLogin = () => {  
    console.log('Clicou no botão de Google')
    navigate('home')
  }

  return <LoginPage onGoogleLogin={handleGoogleLogin} />
}
