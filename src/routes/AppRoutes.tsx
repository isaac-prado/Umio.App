import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePageScreen from '../screens/HomePage/HomePageScreen';
import ProfilePageScreen from '../screens/ProfilePage/ProfilePageScreen';
import NotificationsPageScreen from '../screens/NotificationsPage/NotificationsPageScreen';
import BottomTab from '../components/BottomTab';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="tab" component={BottomTab} />
      <Stack.Screen name="home" component={HomePageScreen} />
      <Stack.Screen name="profile" component={ProfilePageScreen} />
      <Stack.Screen name="notifications" component={NotificationsPageScreen} />
    </Stack.Navigator>    
  );
}
