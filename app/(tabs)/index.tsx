import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MapPin, ChevronDown, Search, Bell } from 'lucide-react-native';
import FoodCard from '../components/FoodCard';
import CategoryCard from '../components/CategoryCard';
import DiscountBanner from '../components/DiscountBanner';
import { categories } from '../data/categories';
import { foods } from '../data/foods';
import { discounts } from '../data/discounts';

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
        
        {discounts.map(discount => (
          <DiscountBanner
            key={discount.id}
            title={discount.title}
            discount={discount.discount}
            subtitle={discount.subtitle}
            image={require('@/assets/images/hamburger.png')}
          />
        ))}
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mb-5"
          contentContainerStyle={{ paddingLeft: 15 }}
        >
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              iconName={category.iconName}
              name={category.name}
              isActive={category.isActive}
              description={category.description}
            />
          ))}
        </ScrollView>
        
        <View className="px-[15px] mb-5 flex flex-row flex-wrap justify-between gap-4">
          {foods.map(food => (
            <FoodCard
              key={food.id}
              image={require('@/assets/images/hamburger.png')}
              name={food.name}
              description={food.description}
              price={food.price}
            />
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
} 