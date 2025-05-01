import { useNavigation } from "@react-navigation/native"
import { SplashPage } from "../../pages/SplashPage/SplashPage"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../routes/types/RootStackList"

type Navigation = NativeStackNavigationProp<RootStackParamList, 'splash'>

const SplashPageScreen = () => {
    const { navigate } = useNavigation<Navigation>()

    const handleClick = () => {
        console.log("Clickado")
        navigate('login')
    }

    return (
        <SplashPage onPressStart={handleClick}/>
    )
}

export default SplashPageScreen