import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../screens/Login/LoginScreen";
import SplashPageScreen from "../screens/SplashPage/SplashPageScreen";
const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="splash" component={SplashPageScreen}/>
        <Stack.Screen name="login" component={LoginPage} />
    </Stack.Navigator>  
  )
}