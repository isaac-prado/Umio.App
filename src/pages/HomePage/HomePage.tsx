import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MapPin, ChevronDown, Search, Bell } from 'lucide-react-native';
import { discounts } from '../../data/discounts';
import { DiscountBanner } from '../../components/DiscountBanner';
import { categories } from '../../data/categories';
import { CategoryCard } from '../../components/CategoryCard';
import { foods } from '../../data/foods';
import { FoodCard } from '../../components/FoodCard';
import { Input } from '../../components/Input';
import { Notification } from '../../components/Notification';

interface HomePageProps {
  onProfileClick: () => void
}


export const HomePage = ({ onProfileClick }: HomePageProps) => {
  return (
    <SafeAreaView className="flex-1 bg-black pt-[10px] p-4 space-y-4">      
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="w-[35px] h-[35px]" onPress={onProfileClick}>
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
        <Notification />
      </View>
      
      <Input icon={<Search size={16} />} />
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