import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../screens/Login/LoginScreen";
import SplashPageScreen from "../screens/SplashPage/SplashPageScreen";
import HomePageScreen from "../screens/HomePage/HomePageScreen";
import ProfilePageScreen from "../screens/ProfilePage/ProfilePageScreen";
import BottomTab from "./AppRoutes";
const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  // Precisa de um useAuthenticate
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={SplashPageScreen}/>
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="home" component={HomePageScreen} />
      <Stack.Screen name="profile" component={ProfilePageScreen} />
      <Stack.Screen name="main" component={BottomTab} />
    </Stack.Navigator>  
  )
}