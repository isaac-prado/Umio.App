import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Login: undefined
    Splash: undefined
    BottomTab: undefined
    Home: undefined
    Profile: undefined
    Notifications: undefined
    Cart: undefined
    Product: { id: string }
}

type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>

export function useAppNavigation () {
  return useNavigation<AppNavigationProp>()
}

