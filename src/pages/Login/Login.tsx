import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'

interface LoginPageProps {
  onGoogleLogin: () => void
}

export const LoginPage = ({ onGoogleLogin }: LoginPageProps) => {
  return (
    <View className="flex-1 bg-black p-5">
      <StatusBar style="light" />

      <View className="items-center mt-10 mb-8">
      </View>

      <View className="flex-row justify-between mb-10 items-center">
      </View>

      <View className="mb-10">
        <Text className="text-white text-2xl font-bold mb-[5px]">Bem-vindo ao UMIÓ!</Text>
        <Text className="text-white text-base">Login</Text>
      </View>

      <View className="gap-[15px]">
        <TouchableOpacity
          className="bg-transparent border border-white rounded-3xl py-[15px] px-5 flex-row items-center"
          onPress={onGoogleLogin}
        >
          <Text className="text-white text-base font-medium">Entre com o Google</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-transparent border border-white rounded-3xl py-[15px] px-5 flex-row items-center">
          <Text className="text-white text-base font-medium">Entre com a Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-transparent border border-white rounded-3xl py-[15px] px-5 flex-row items-center">
          <Text className="text-white text-base font-medium">Entre com o E-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
