import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { cssInterop } from 'nativewind'
import './global.css'
import CustomButton from '../src/components/CustomButton';

cssInterop(Image, { className: "style" });

export default function SplashScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black p-5 justify-between">
      <StatusBar style="light" />
      
      <View className="items-center mt-10">
        <Image 
          source={require('@/assets/images/logo.png')} 
          style={{width: 80, height: 80}}
        />
      </View>
      
      <View className="flex-1 justify-center items-center -mt-10">
        <Image 
          source={require('@/assets/images/hamburger.png')} 
          style={{width: 430}}
          resizeMode="contain"
        />
      </View>
      
      <Text className="text-white text-base font-medium mb-10 ml-5">É coisa de outro mundo...</Text>
      
      <Link href="/login" asChild>
        <CustomButton>
          Peça já!
        </CustomButton>
      </Link>
    </SafeAreaView>
  );
} 