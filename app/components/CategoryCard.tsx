import { View, Text, TouchableOpacity } from 'react-native';
import { ReactNode } from 'react';
import { Utensils, Pizza, Salad } from 'lucide-react-native';

type CategoryCardProps = {
  iconName: string;
  name: string;
  isActive?: boolean;
  description?: string;
  onPress?: () => void;
};

export default function CategoryCard({ 
  iconName, 
  name, 
  isActive = false, 
  description, 
  onPress 
}: CategoryCardProps) {
  
  const renderIcon = () => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils size={24} color="black" />;
      case 'Pizza':
        return <Pizza size={24} color="black" />;
      case 'Salad':
        return <Salad size={24} color="black" />;
      default:
        return <Utensils size={24} color="black" />;
    }
  };

  return (
    <TouchableOpacity 
      className="w-[100px] items-center mr-[15px]"
      onPress={onPress}
    >
      <View className="w-[60px] h-[60px] bg-white rounded-full items-center justify-center mb-[5px]">
        {renderIcon()}
      </View>
      <View className="items-center">
        <Text className={`text-sm font-bold ${isActive ? 'text-[#EE6B10]' : 'text-white'}`}>
          {name}
        </Text>
        {description && (
          <Text className="text-white text-xs">{description}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
} 