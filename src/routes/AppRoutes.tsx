import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, ShoppingCart, User } from 'lucide-react-native';
import CartListScreen from '../screens/Cart/CartListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#EE6B10',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { 
          backgroundColor: '#000',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 5
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="inicial"
        component={CartListScreen}
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="menu"
        component={CartListScreen}
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="pedidos"
        component={CartListScreen}
        options={{
          title: 'Pedidos',
          tabBarIcon: ({ color }) => <ShoppingCart size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="perfil"
        component={CartListScreen}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="tabs" component={BottomTab} />
    </Stack.Navigator>    
  );
}
