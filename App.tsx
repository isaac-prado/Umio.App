import "./src/global.css"
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/context/useAuth";
import { RouteSelector } from "./src/routes/RouteSelector";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <RouteSelector />
      </NavigationContainer>
    </UserProvider>
  )
}
