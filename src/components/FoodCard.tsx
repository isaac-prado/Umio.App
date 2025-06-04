import { View, Text, Image, TouchableOpacity } from "react-native";
import { Plus } from "lucide-react-native";
import { useState } from "react";

type FoodCardProps = {
  image: any;
  name: string;
  description: string;
  price: string;
  onPress?: () => void;
};

export const FoodCard = ({ image, name, price, onPress }: FoodCardProps) => {
  const [imageError, setImageError] = useState(false);

  const getImageSource = () => {
    if (imageError || !image || !image.uri) {
      return require("../assets/images/hamburger.png");
    }
    return image;
  };

  return (
    <TouchableOpacity
      className="rounded-[30px] p-2 border border-orange-500 min-w-[130px] w-min"
      onPress={onPress}
    >
      <Image
        source={getImageSource()}
        style={{ width: 120, height: 120, overflow: "hidden" }}
        resizeMode="contain"
        onError={() => setImageError(true)}
      />
      <View className="mb-2 flex flex-col items-center">
        <Text className="text-white text-sm text-center">{name}</Text>
        <Text className="text-white text-sm text-center">R$ {price}</Text>
      </View>
      <TouchableOpacity
        className="absolute bottom-[-10px] right-1/2 translate-x-1/2 bg-orange-500 rounded-full py-1 px-4"
        onPress={onPress}
      >
        <Plus size={14} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
