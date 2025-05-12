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
    <View className="rounded-3xl px-2 pb-2 border border-orange-500 min-w-[130px]">
      <Image 
        source={image} 
        style={{width: '100%', height: 100}}
        resizeMode="contain"
      />
      <View className="mb-2 flex flex-col items-center">
        <Text className="text-white text-sm">{name}</Text>
        <Text className="text-white text-sm mb-2">{description}</Text>
        <Text className="text-white text-sm">R$ {price}</Text>
      </View>
      <TouchableOpacity 
        className="absolute bottom-[-10px] right-1/2 translate-x-1/2 bg-orange-500 rounded-full py-1 px-4"
        onPress={onPress}
      >
        <Plus size={14} color="white" />
      </TouchableOpacity>
    </View>
  );
} 