import { AuthRoutes } from "./AuthRoutes";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function RouteSelector() {
  const RootStack = createNativeStackNavigator()
 
  // bolar um singleton para autenticar
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // console.log(isAuthenticated)
  
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="App" component={AuthRoutes} />
    </RootStack.Navigator>
  )
}