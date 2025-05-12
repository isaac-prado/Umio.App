import { useNavigation } from "@react-navigation/native"
import { SplashPage } from "../../pages/SplashPage/SplashPage"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useAppNavigation } from "../../hooks/useAppNavigation"

const SplashPageScreen = () => {
    const { navigate } = useAppNavigation()

    const handleClick = () => {
        console.log("Clickado")
        navigate('login')
    }

    return (
        <SplashPage onPressStart={handleClick}/>
    )
}

export default SplashPageScreen