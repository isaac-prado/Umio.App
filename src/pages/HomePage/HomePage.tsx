import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MapPin, ChevronDown, Search, Bell } from 'lucide-react-native';
import { discounts } from '../../data/discounts';
import DiscountBanner from '../../components/DiscountBanner';
import { categories } from '../../data/categories';
import CategoryCard from '../../components/CategoryCard';
import { foods } from '../../data/foods';
import FoodCard from '../../components/FoodCard';

export const HomePage = () => {
  return (
    <SafeAreaView className="flex-1 bg-black pt-[10px] p-4 space-y-4">      
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="w-[35px] h-[35px]">
          <Image 
            source={require('../../assets/images/logo.png')} 
            style={{width: '100%', height: '100%'}}
          />
        </TouchableOpacity>
        
        <View className="flex-row items-center gap-2">
          <MapPin size={16} color="#EE6B10" />
          <Text className="text-white text-sm">Itajubá, Minas Gerais</Text>
          <ChevronDown size={12} color="#EE6B10" />
        </View>
        <View className="rounded-full bg-[#B8B8B8] p-1.5">
          <Bell size={20} color="#000" />
        </View>
      </View>
      
      <View className="flex-row items-center bg-zinc-700 rounded-xl px-3 h-8">
        <Search size={20} color="#666" className="mr-[10px]" />
        <TextInput
          className="flex-1 text-white text-base h-full"
          placeholder=""
          placeholderTextColor="#666"
        />
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-white text-lg font-bold mb-2">Bem-vindo!</Text>
        
        {discounts.map(discount => (
          <DiscountBanner
            key={discount.id}
            title={discount.title}
            discount={discount.discount}
            subtitle={discount.subtitle}
            image={require('../../assets/images/hamburger.png')}
          />
        ))}
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex flex-row gap-2">
            {categories.map((category) => (
              <CategoryCard 
                key={category.id}
                iconName={category.iconName}
                name={category.name}
              />
            ))}
          </View>
        </ScrollView>
        
        <View className="my-5 flex flex-row flex-wrap gap-4 items-center justify-center">
          {foods.map(food => (
            <FoodCard
              key={food.id}
              image={require('../../assets/images/hamburger.png')}
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