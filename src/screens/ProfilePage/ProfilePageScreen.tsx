import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/types/RootStackList'

type Navigation = NativeStackNavigationProp<RootStackParamList, 'login'>

export default function ProfilePageScreen() {
  const { navigate } = useNavigation<Navigation>()

  return <ProfilePage onExitClick={() => navigate('login')} />
}
