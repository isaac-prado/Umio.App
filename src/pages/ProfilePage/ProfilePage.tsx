import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Input } from '../../components/Input';
import { User, Phone, Mail, MapPin, ChevronLeft, ChevronDown, Bell } from 'lucide-react-native';
import { useAuth } from '../../context/useAuth';

export const ProfilePage = () => {
  const { logout } = useAuth()

  const handleLogoff = () => logout()

  return (
    <View className="flex-1 bg-black p-5">      
      <View className="items-center mb-6">
        <Text className="text-white text-xl font-bold mb-4">Meu Perfil</Text>
        <Text>Total de pontos: </Text>
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
          />
        </View>
        
        <View>
          <Text className="text-white mb-1">Telefone:</Text>
          <Input 
            icon={<Phone size={16} color="white" />}
          />
        </View>
        
        <View>
          <Text className="text-white mb-1">E-mail:</Text>
          <Input 
            icon={<Mail size={16} color="white" />}
          />
        </View>
        
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