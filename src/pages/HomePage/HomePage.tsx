import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
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
  onPressProfile: () => void;
  onPressNotifications: () => void;
}


export const HomePage = ({ onPressProfile, onPressNotifications }: HomePageProps) => {
  return (
    <View className="flex-1 bg-black p-5">  
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="w-[35px] h-[35px]" onPress={onPressProfile}>
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
        <TouchableOpacity onPress={onPressNotifications}>
          <Notification />
        </TouchableOpacity>
      </View>
      
      <View className="my-4">
        <Input icon={<Search size={16} />} />
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
    </View>
  );
} 