import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LoginPage } from '../../pages/Login/Login'

export default function LoginScreen() {
  const navigator = useNavigation()
  
  const handleGoogleLogin = () => {  
    console.log('Clicou no botão de Google')
  }

  return <LoginPage onGoogleLogin={handleGoogleLogin} />
}
