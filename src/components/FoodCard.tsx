import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';

type FoodCardProps = {
  image: any;
  name: string;
  description: string;
  price: string;
  onPress?: () => void;
};

export default function FoodCard({ image, name, description, price, onPress }: FoodCardProps) {
  return (
    <View className="bg-[#111] p-[15px] rounded-lg w-[48%]">
      <Image 
        source={image} 
        style={{width: '100%', height: 100}}
        resizeMode="contain"
      />
      <Text className="text-white text-sm font-medium mt-[5px]">{name}</Text>
      <Text className="text-gray-400 text-xs mb-[5px]">{description}</Text>
      <Text className="text-white text-base font-bold">R$ {price}</Text>
      <TouchableOpacity 
        className="bg-[#EE6B10] w-[30px] h-[30px] rounded-full items-center justify-center absolute bottom-[15px] right-[15px]"
        onPress={onPress}
      >
        <Plus size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
} 