import { SplashPage } from "../../pages/SplashPage/SplashPage"
import { useAppNavigation } from "../../hooks/useAppNavigation"

const SplashPageScreen = () => {
    const { navigate } = useAppNavigation()

    return <SplashPage onPressStart={() => navigate("Login")}/>
}
export default SplashPageScreen