import { Tabs } from 'expo-router';
import { Home, ShoppingCart, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
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
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }: { color: string }) => (
            <Home size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }: { color: string }) => (
            <Home size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Pedido',
          tabBarIcon: ({ color }: { color: string }) => (
            <ShoppingCart size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }: { color: string }) => (
            <User size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
} 