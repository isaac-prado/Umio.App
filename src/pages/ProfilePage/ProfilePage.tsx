import { View, Text, Image, TouchableOpacity, Button, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { Input } from '../../components/Input';
import { Notification } from '../../components/Notification';
import { User, Phone, Mail, Lock, MapPin, ChevronLeft, ChevronDown, Bell } from 'lucide-react-native';
import { Cliente } from '../../interface/Cliente';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../hooks/useAppNavigation';

interface ProfilePageProps {
  cliente: Cliente
}
type Navigation = NativeStackNavigationProp<RootStackParamList, 'login'>

export const ProfilePage = ({ 
  cliente,
}: ProfilePageProps) => {
  const { navigate } = useNavigation<Navigation>()
  console.log(cliente)

  const handleGoBack = useCallback(() => navigate('home') , [navigate])
  const handleLogoff = useCallback(() => navigate('login'), [navigate])

  return (
    <View className="flex-1 bg-black p-5">
      <View className="flex-row justify-between items-center mb-6">
        <TouchableOpacity onPress={handleGoBack}>
          <ChevronLeft size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Notification />
        </TouchableOpacity>
      </View>
      
      <View className="items-center mb-6">
        <Text className="text-white text-xl font-bold mb-4">Meu Perfil</Text>
        <Text>Total de pontos: {cliente.pontos}</Text>
        <View className="w-20 h-20 rounded-full"> 

          <Image 
            source={require('../../assets/images/logo.png')} 
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
      </View>
      
      <View className="flex flex-col gap-4">
        <View>
          <Text className="text-white mb-1">Nome:</Text>
          <Input 
            icon={<User size={16} color="white" />}
            value={cliente.nome}
          />
        </View>
        
        <View>
          <Text className="text-white mb-1">Telefone:</Text>
          <Input 
            icon={<Phone size={16} color="white" />}
            value={cliente.telefone}
          />
        </View>
        
        <View>
          <Text className="text-white mb-1">E-mail:</Text>
          <Input 
            icon={<Mail size={16} color="white" />}
            value={cliente.email}  
          />
        </View>
        
        {/* <View>
          <Text className="text-white mb-1">Senha:</Text>
          <Input 
            icon={<Lock size={16} color="white" />}
            value={cliente.senha}
          />
        </View> */}
        
        <View>
          <Text className="text-white mb-1">Endereço:</Text>
          <View className="flex-row items-center bg-neutral-800 rounded-xl px-3 h-10">
            <View className="mr-[10px] text-white">
              <MapPin size={16} color="white" />
            </View>
            <TextInput
              className="flex-1 text-white text-base h-full"
              placeholder="Digite seu CEP"
              placeholderTextColor="#666"
              value={cliente.endereco.rua}
            />
            <ChevronDown size={16} color="white" />
          </View>
        </View>
      </View>
      
      <View className="flex-1 justify-end">
        <TouchableOpacity className="items-center py-3" onPress={handleLogoff}>
          <Text className="text-white font-bold underline">SAIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 