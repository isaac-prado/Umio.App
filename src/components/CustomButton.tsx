import { Button, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { twMerge } from 'tailwind-merge';

interface CustomButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
}

export default function CustomButton({ 
  onPress, 
  children, 
  className = "",
  textClassName = ""
}: CustomButtonProps) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      className={twMerge("bg-[#EE6B10] rounded-3xl py-2 items-center mb-5 w-[300px] self-center", className)}
    >
      <Text className={twMerge("text-lg text-white font-bold", textClassName)}>{children}</Text>
    </TouchableOpacity>
  );
}