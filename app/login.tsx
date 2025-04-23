import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

export default function LoginScreen() {
  const handleGoogleLogin = () => {
    // Aqui seria implementada a autenticação com o Google
    // Por enquanto, apenas redirecionamos para a home
    router.replace('/(tabs)');
  };

  return (
    <View className="flex-1 bg-black p-5">
      <StatusBar style="light" />
      
      <View className="items-center mt-10 mb-8">
        <Image 
          source={require('../assets/images/logo.png')} 
          style={{width: 150, height: 150}}
          resizeMode="contain"
        />
      </View>
      
      <View className="flex-row justify-between mb-10 items-center">
        <Image source={require('@/assets/images/login-food2.png')} style={{width: 61}} resizeMode="contain" />
        <Image source={require('@/assets/images/login-food1.png')} style={{width: 61}} resizeMode="contain" />
        <Image source={require('@/assets/images/login-food3.png')} style={{width: 61}} resizeMode="contain" />
        <Image source={require('@/assets/images/login-food4.png')} style={{width: 61}} resizeMode="contain" />
        <Image source={require('@/assets/images/login-food5.png')} style={{width: 61}} resizeMode="contain" />
      </View>
      
      <View className="mb-10">
        <Text className="text-white text-2xl font-bold mb-[5px]">Bem-vindo ao UMIÓ!</Text>
        <Text className="text-white text-base">Login</Text>
      </View>
      
      <View className="gap-[15px]">
        <TouchableOpacity className="bg-transparent border border-white rounded-3xl py-[15px] px-5 flex-row items-center" onPress={handleGoogleLogin}>
          <Image source={require('../assets/images/google.png')} style={{width: 24, height: 24, marginRight: 10}} resizeMode="contain" />
          <Text className="text-white text-base font-medium">Entre com o Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="bg-transparent border border-white rounded-3xl py-[15px] px-5 flex-row items-center">
          <Image source={require('../assets/images/apple.png')} style={{width: 24, height: 24, marginRight: 10}} resizeMode="contain" />
          <Text className="text-white text-base font-medium">Entre com a Apple</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="bg-transparent border border-white rounded-3xl py-[15px] px-5 flex-row items-center">
          <Image source={require('../assets/images/email.png')} style={{width: 24, height: 24, marginRight: 10}} resizeMode="contain" />
          <Text className="text-white text-base font-medium">Entre com o E-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 