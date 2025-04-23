import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MapPin, ChevronDown, Search, Plus, Utensils, Pizza, Salad, Bell } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black pt-[10px]">
      <StatusBar style="light" />
      
      <View className="flex-row justify-between items-center px-[15px] mb-[15px]">
        <TouchableOpacity className="w-[35px] h-[35px] overflow-hidden">
          <Image 
            source={require('@/assets/images/logo.png')} 
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
        </TouchableOpacity>
        
        <View className="flex-row items-center">
          <MapPin size={20} color="#EE6B10" className="mr-[5px]" />
          <Text className="text-white text-sm mr-[5px]">Itajubá, Minas Gerais</Text>
          <ChevronDown size={12} color="#EE6B10" className="ml-[2px]" />
        </View>
        <View className="">
          <Bell size={20} color="#000" />
        </View>
      </View>
      
      <View className="flex-row items-center bg-[#333] rounded-lg px-[10px] mx-[15px] h-[40px] mb-[15px]">
        <Search size={20} color="#666" className="mr-[10px]" />
        <TextInput
          className="flex-1 text-white text-base h-full"
          placeholder=""
          placeholderTextColor="#666"
        />
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-white text-lg font-bold mx-[15px] mb-[15px]">Bem-vindo!</Text>
        
        <View className="bg-[#EE6B10] rounded-lg mx-[15px] mb-5 h-[100px] flex-row justify-between overflow-hidden">
          <View className="p-[15px]">
            <Text className="text-white text-sm font-bold">CUPONS</Text>
            <Text className="text-white text-4xl font-bold leading-10">20%</Text>
            <Text className="text-white text-sm font-bold">DE DESCONTO</Text>
          </View>
          <Image 
            source={require('@/assets/images/hamburger.png')} 
            style={{width: 120, height: 120, marginTop: -10, marginRight: -10}}
            resizeMode="contain"
          />
        </View>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mb-5"
        >
          <TouchableOpacity className="w-[100px] items-center mr-[15px] ml-[15px]">
            <View className="w-[60px] h-[60px] bg-white rounded-full items-center justify-center mb-[5px]">
              <Utensils size={24} color="black" />
            </View>
            <Text className="text-white text-sm font-bold">MASSAS</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[100px] items-center mr-[15px]">
            <View className="w-[60px] h-[60px] bg-white rounded-full items-center justify-center mb-[5px]">
              <Pizza size={24} color="black" />
            </View>
            <View className="items-center">
              <Text className="text-[#EE6B10] text-sm font-bold">BURGUERS</Text>
              <Text className="text-white text-xs">160 g</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="w-[100px] items-center mr-[15px]">
            <View className="w-[60px] h-[60px] bg-white rounded-full items-center justify-center mb-[5px]">
              <Salad size={24} color="black" />
            </View>
            <Text className="text-white text-sm font-bold">SALADA</Text>
          </TouchableOpacity>
        </ScrollView>
        
        <View className="px-[15px] mb-5">
          <View className="flex-row justify-between mb-[15px]">
            <View className="bg-[#111] p-[15px] rounded-lg w-[48%]">
              <Image 
                source={require('@/assets/images/hamburger.png')} 
                style={{width: '100%', height: 100}}
                resizeMode="contain"
              />
              <Text className="text-white text-sm font-medium mt-[5px]">Do Meu Jeito & Mió</Text>
              <Text className="text-gray-400 text-xs mb-[5px]">(Burger 160g)</Text>
              <Text className="text-white text-base font-bold">R$ 21.90</Text>
              <TouchableOpacity className="bg-[#EE6B10] w-[30px] h-[30px] rounded-full items-center justify-center absolute bottom-[15px] right-[15px]">
                <Plus size={18} color="white" />
              </TouchableOpacity>
            </View>
            
            <View className="bg-[#111] p-[15px] rounded-lg w-[48%]">
              <Image 
                source={require('@/assets/images/hamburger.png')} 
                style={{width: '100%', height: 100}}
                resizeMode="contain"
              />
              <Text className="text-white text-sm font-medium mt-[5px]">Salada</Text>
              <Text className="text-gray-400 text-xs mb-[5px]">(Burger 160g)</Text>
              <Text className="text-white text-base font-bold">R$ 28.90</Text>
              <TouchableOpacity className="bg-[#EE6B10] w-[30px] h-[30px] rounded-full items-center justify-center absolute bottom-[15px] right-[15px]">
                <Plus size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          
          <View className="flex-row justify-between">
            <View className="bg-[#111] p-[15px] rounded-lg w-[48%]">
              <Image 
                source={require('@/assets/images/hamburger.png')} 
                style={{width: '100%', height: 100}}
                resizeMode="contain"
              />
              <Text className="text-white text-sm font-medium mt-[5px]">Bacon</Text>
              <Text className="text-gray-400 text-xs mb-[5px]">(Burger 160g)</Text>
              <Text className="text-white text-base font-bold">R$ 33.90</Text>
              <TouchableOpacity className="bg-[#EE6B10] w-[30px] h-[30px] rounded-full items-center justify-center absolute bottom-[15px] right-[15px]">
                <Plus size={18} color="white" />
              </TouchableOpacity>
            </View>
            
            <View className="bg-[#111] p-[15px] rounded-lg w-[48%]">
              <Image 
                source={require('@/assets/images/hamburger.png')} 
                style={{width: '100%', height: 100}}
                resizeMode="contain"
              />
              <Text className="text-white text-sm font-medium mt-[5px]">Catupiry</Text>
              <Text className="text-gray-400 text-xs mb-[5px]">(Burger 160g)</Text>
              <Text className="text-white text-base font-bold">R$ 32.90</Text>
              <TouchableOpacity className="bg-[#EE6B10] w-[30px] h-[30px] rounded-full items-center justify-center absolute bottom-[15px] right-[15px]">
                <Plus size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 