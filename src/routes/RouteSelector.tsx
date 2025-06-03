// import { AuthRoutes } from "./AuthRoutes";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useAuth } from "../context/useAuth";
// import { AppRoutes } from "./AppRoutes";

// export function RouteSelector() {
//   const RootStack = createNativeStackNavigator()
 
//   const { isLoggedIn, isReady } = useAuth()

//   if (!isReady) {
//     console.log("passou por aqui?")
//     return null
//   }

//   return (
//     <RootStack.Navigator screenOptions={{ headerShown: false }}>
//       {isLoggedIn() ? (
//         <RootStack.Screen name="App" component={AppRoutes} />
//       ) : (
//         <RootStack.Screen name="Auth" component={AuthRoutes} />
//       )}
//     </RootStack.Navigator>
//   )
// }