import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LoginPage } from '../../pages/Login/Login'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/types/RootStackList'
import { HomePage } from '../../pages/HomePage/HomePage'

type Navigation = NativeStackNavigationProp<RootStackParamList, 'home'>

export default function HomePageScreen() {
  const { navigate } = useNavigation<Navigation>()

  return <HomePage onProfileClick={() => navigate('profile')} />
}
