import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../screens/Login/LoginScreen";
import SplashPageScreen from "../screens/SplashPage/SplashPageScreen";
import HomePageScreen from "../screens/HomePage/HomePageScreen";
import ProfilePageScreen from "../screens/ProfilePage/ProfilePageScreen";
const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="splash" component={SplashPageScreen}/>
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="home" component={HomePageScreen} />
      <Stack.Screen name="profile" component={ProfilePageScreen} />
    </Stack.Navigator>  
  )
}