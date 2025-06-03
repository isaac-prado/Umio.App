import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, ShoppingCart, User, Bell } from 'lucide-react-native'
import HomePageScreen from '../screens/HomePage/HomePageScreen'
import CartListScreen from '../screens/Cart/CartListScreen'
import ProfilePageScreen from '../screens/ProfilePage/ProfilePageScreen'
import NotificationsPageScreen from '../screens/NotificationsPage/NotificationsPageScreen'

const Tab = createBottomTabNavigator()

export default function BottomTab() {
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
        animation: 'shift',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePageScreen}
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartListScreen}
        options={{
          title: 'Pedidos',
          tabBarIcon: ({ color }) => <ShoppingCart size={24} color={color} />
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationsPageScreen}
        options={{
          title: 'Notificações',
          tabBarIcon: ({ color }) => <Bell size={24} color={color} />
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfilePageScreen}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <User size={24} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}
