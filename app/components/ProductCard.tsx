import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';

type ProductCardProps = {
  image: any;
  name: string;
  description: string;
  price: string;
  onPress?: () => void;
};

export default function ProductCard({ image, name, description, price, onPress }: ProductCardProps) {
  return (
    <View className="bg-black rounded-lg overflow-hidden w-full">
      <View className="p-4 flex-row items-center">
        <Image 
          source={image} 
          style={{width: 120, height: 120}}
          resizeMode="contain"
        />
        <View className="ml-3 flex-1">
          <Text className="text-white text-lg font-medium">{name}</Text>
          <Text className="text-gray-400 text-sm">{description}</Text>
          <Text className="text-white text-xl font-bold mt-2">R$ {price}</Text>
        </View>
      </View>
      
      <View className="absolute bottom-4 right-4">
        <TouchableOpacity 
          className="bg-[#EE6B10] w-[40px] h-[40px] rounded-full items-center justify-center"
          onPress={onPress}
        >
          <Plus size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
} 