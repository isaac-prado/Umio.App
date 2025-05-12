import { View, Text, Image, TouchableOpacity, Button, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { Input } from '../../components/Input';
import { Notification } from '../../components/Notification';
import { User, Phone, Mail, Lock, MapPin, ChevronLeft, ChevronDown, Bell } from 'lucide-react-native';
import PrimaryButton from '../../components/CustomButton';

interface ProfilePageProps {
  onExitClick: () => void
}

export const ProfilePage = ({ onExitClick }: ProfilePageProps) => {
  return (
    <SafeAreaView className="flex-1 bg-black pt-[10px] p-4 space-y-4">
      <View className="flex-row justify-between items-center mb-6">
        <TouchableOpacity>
          <ChevronLeft size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Notification />
        </TouchableOpacity>
      </View>
      
      <View className="items-center mb-6">
        <Text className="text-white text-xl font-bold mb-4">Meu perfil</Text>
        <View className="w-20 h-20 rounded-full"> 

          <Image 
            source={require('../../assets/images/logo.png')} 
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
      </View>
      
      <View className="space-y-4">
        <View>
          <Text className="text-white mb-1">Nome:</Text>
          <Input icon={<User size={16} color="white" />}/>
        </View>
        
        <View>
          <Text className="text-white mb-1">Telefone:</Text>
          <Input icon={<Phone size={16} color="white" />}/>
        </View>
        
        <View>
          <Text className="text-white mb-1">E-mail:</Text>
          <Input icon={<Mail size={16} color="white" />}/>
        </View>
        
        <View>
          <Text className="text-white mb-1">Senha:</Text>
          <Input icon={<Lock size={16} color="white" />}/>
        </View>
        
        <View>
          <Text className="text-white mb-1">Endereço:</Text>
          <View className="flex-row items-center bg-neutral-800 rounded-xl px-3 h-8">
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

      <TouchableOpacity className="items-center py-3">
        <PrimaryButton onPress={() => {}}>
          Enviar
        </PrimaryButton>
      </TouchableOpacity>
      
      <View className="flex-1 justify-end">
        <TouchableOpacity className="items-center py-3" onPress={onExitClick}>
          <Text className="text-white font-bold underline">SAIR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
} 