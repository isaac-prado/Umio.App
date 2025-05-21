import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/types/RootStackList'
import { cliente_isaac } from '../../data/cliente'

type Navigation = NativeStackNavigationProp<RootStackParamList, 'login'>

export default function ProfilePageScreen() {
  const { navigate } = useNavigation<Navigation>()

  return (
  <ProfilePage 
    cliente={cliente_isaac}
  />
)
}
