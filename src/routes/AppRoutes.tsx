import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreen from "../screens/HomePage/HomePageScreen";
import ProfilePageScreen from "../screens/ProfilePage/ProfilePageScreen";
import NotificationsPageScreen from "../screens/NotificationsPage/NotificationsPageScreen";
import OrderScreen from "../screens/Order/OrderScreen";
import FinalizarPedidoScreen from "../screens/Order/FinalizarPedidoScreen";
import BottomTab from "../components/BottomTab";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Home" component={HomePageScreen} />
      <Stack.Screen name="Profile" component={ProfilePageScreen} />
      <Stack.Screen name="Notifications" component={NotificationsPageScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="FinalizarPedido" component={FinalizarPedidoScreen} />
    </Stack.Navigator>
  );
}
