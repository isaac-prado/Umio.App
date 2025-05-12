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
        return <Utensils size={18} color="black" />;
      case 'Pizza':
        return <Pizza size={18} color="black" />;
      case 'Salad':
        return <Salad size={18} color="black" />;
      default:
        return <Utensils size={18} color="black" />;
    }
  };

  return (
    <TouchableOpacity 
      onPress={onPress}
      className="flex flex-row items-center gap-2 bg-zinc-700 rounded-xl px-3 h-8"
    >
      <View className="w-6 h-6 bg-white rounded-full items-center justify-center">
        {renderIcon()}
      </View>
      <Text className={`text-xs font-semibold ${isActive ? 'text-[#EE6B10]' : 'text-white'}`}>
        {name}
      </Text>
    </TouchableOpacity>
  );
} 