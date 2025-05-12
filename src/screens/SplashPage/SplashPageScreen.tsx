import { useNavigation } from "@react-navigation/native"
import { SplashPage } from "../../pages/SplashPage/SplashPage"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useAppNavigation } from "../../hooks/useAppNavigation"

const SplashPageScreen = () => {
    const { navigate } = useAppNavigation()

    return <SplashPage onPressStart={() => navigate('login')}/>
}

export default SplashPageScreen