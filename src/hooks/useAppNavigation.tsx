import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
    login: undefined
    splash: undefined
    home: undefined
    perfil: undefined
    carrinho: undefined
    produto: { id: string }
}

type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>

export function useAppNavigation () {
  return useNavigation<AppNavigationProp>()
}

