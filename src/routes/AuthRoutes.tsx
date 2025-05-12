import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../screens/Login/LoginScreen";
import SplashPageScreen from "../screens/SplashPage/SplashPageScreen";
import HomePageScreen from "../screens/HomePage/HomePageScreen";
const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
        <Stack.Screen 
          name="Splash"
          component={SplashPageScreen}
          options={{ title: "Umió de Todos" }}
        />
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{ title: "Umió de Todos", animation: "default" }}
        />
    </Stack.Navigator>  
  )
}