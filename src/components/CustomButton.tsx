import { Button, View, Text } from "react-native";

import { TouchableOpacity } from "react-native";

interface CustomButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
}

export default function CustomButton({ onPress, children }: CustomButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} className="bg-[#EE6B10] rounded-3xl py-[15px] items-center mb-5 w-[300px] self-center">
      <Text className="text-lg text-white font-bold">{children}</Text>
    </TouchableOpacity>
  );
}