import "./src/global.css"
import { NavigationContainer } from "@react-navigation/native";
import { useAuth, UserProvider } from "./src/context/useAuth";
import { ActivityIndicator, View } from "react-native";
import { AppRoutes } from "./src/routes/AppRoutes";
import { AuthRoutes } from "./src/routes/AuthRoutes";
 

function RouteSelector() {
  const { isLoggedIn, isReady } = useAuth()

    if (!isReady) {
      return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <ActivityIndicator size="large" color="#EE6B10" />
        </View>
      )
    }

    return isLoggedIn() ? <AppRoutes /> : <AuthRoutes />
}

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <RouteSelector />
      </NavigationContainer>
    </UserProvider>
  )
}
