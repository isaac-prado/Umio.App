import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, Pressable, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { LockKeyhole, Mail, Apple, Check } from 'lucide-react-native'
import { Input } from '../../components/Input'
import CustomButton from '../../components/CustomButton'

interface LoginPageProps {
  onGoogleLogin: () => void
  onAppleLogin: () => void
  onEmailLogin: () => void
}

export const LoginPage = ({ onGoogleLogin }: LoginPageProps) => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View className="flex-1 bg-black p-5">
      <StatusBar style="light" />

      <View className="items-center mt-10 mb-8">
        <Image 
          source={require('../../assets/images/logo.png')} 
          style={{width: 150, height: 150}}
          resizeMode="contain"
        />
      </View>
      
      <View className="flex-row justify-between mb-10 items-center">
        <Image source={require('../../assets/images/login-food2.png')} style={{width: 61}} resizeMode="contain" />
        <Image source={require('../../assets/images/login-food1.png')} style={{width: 61}} resizeMode="contain" />
        <Image source={require('../../assets/images/login-food3.png')} style={{width: 61}} resizeMode="contain" />
        <Image source={require('../../assets/images/login-food4.png')} style={{width: 61}} resizeMode="contain" />
        <Image source={require('../../assets/images/login-food5.png')} style={{width: 61}} resizeMode="contain" />
      </View>

      <View className="mb-6">
        <Text className="text-white text-[22px] font-bold mb-[5px]">Bem-vindo ao UMIÓ!</Text>
        <Text className="text-white text-base">Login</Text>
      </View>

      <View className="gap-[15px] mb-3">
        <Input placeholder="E-mail" icon={<Mail size={16} color="white" />}/>
        <Input placeholder="Senha" icon={<LockKeyhole size={16} color="white" />}/>
      </View>
      
      <View className="flex-row justify-between mb-8">
        <TouchableOpacity 
          onPress={() => setRememberMe(!rememberMe)} 
          className="flex-row items-center"
        >
          <View className={`w-4 h-4 rounded-sm mr-2 items-center justify-center ${rememberMe ? 'bg-white' : 'border border-white'}`}>
            {rememberMe && <Check size={10} color="black" />}
          </View>
          <Text className="text-white text-xs font-medium">Me lembre</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="text-white text-xs font-medium">Esqueci minha senha!</Text>
        </TouchableOpacity>
      </View>

      <CustomButton 
        className="bg-[#EE6B10] w-full mb-8 rounded-[20px] py-[5px]"
        textClassName="text-[17px] font-bold"
        onPress={onGoogleLogin}
      >
        Login
      </CustomButton>

      <View className="flex-row items-center mb-6">
        <View className="flex-1 h-[0.5px] bg-orange-500" />
        <Text className="mx-4 text-white font-normal text-base">Ou faça login com</Text>
        <View className="flex-1 h-[0.5px] bg-orange-500" />
      </View>



      <View className="flex-row justify-center gap-5 mb-8">

        <TouchableOpacity 
          onPress={onGoogleLogin}
          className="h-14 w-14 rounded-full items-center justify-center"
        >
          <Image 
            source={require('../../assets/images/google.png')} 
            style={{width: 40, height: 40}} 
            resizeMode="contain"
          />
        </TouchableOpacity>


        <TouchableOpacity 
          className="h-14 w-14 rounded-full items-center justify-center"
        >
          <Image 
            source={require('../../assets/images/apple.png')} 
            style={{width: 40, height: 40}} 
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Link para cadastro */}
      <View className="flex-row justify-center items-center">
        <Text className="text-white text-xs font-normal">Ainda não possui cadastro? </Text>
        <TouchableOpacity>
          <Text className="text-white text-xs font-bold">Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
