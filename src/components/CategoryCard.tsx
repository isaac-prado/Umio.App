import { View, Text, TouchableOpacity, Image } from "react-native";
import { ReactNode } from "react";
import {
  Utensils,
  Pizza,
  Salad,
  Sandwich,
  Cookie,
  Carrot,
  Drumstick,
  Coffee,
  Menu,
} from "lucide-react-native";

type CategoryCardProps = {
  name: string;
  isActive?: boolean;
  onPress?: () => void;
};

// Mapeamento de categorias para ícones
const categoryIconMap: Record<
  string,
  React.ComponentType<any> | "burger-image"
> = {
  Massas: Pizza,
  Saladas: Salad,
  Lanchinhos: Sandwich,
  Pastéis: Cookie,
  Porções: Utensils,
  "Burgers 160g": "burger-image",
  Vegetarianos: Carrot,
  "Smash Frango": Drumstick,
  "Smash Burgers": "burger-image",
  Bebidas: Coffee,
};

export const CategoryCard = ({
  name,
  isActive = false,
  onPress,
}: CategoryCardProps) => {
  const renderIcon = () => {
    const iconOrImage = categoryIconMap[name] || Menu;

    if (iconOrImage === "burger-image") {
      return (
        <Image
          source={require("../assets/images/burger2.png")}
          style={{ width: 16, height: 16 }}
          resizeMode="contain"
        />
      );
    }

    const IconComponent = iconOrImage as React.ComponentType<any>;
    return <IconComponent size={16} color="#000" />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center gap-2 bg-zinc-700 rounded-xl px-3 h-8"
    >
      <View className="w-6 h-6 bg-white rounded-full items-center justify-center">
        {renderIcon()}
      </View>
      <Text
        className={`text-xs font-semibold ${isActive ? "text-[#EE6B10]" : "text-white"}`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
