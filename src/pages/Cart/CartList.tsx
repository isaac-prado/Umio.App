import { Text, View } from 'react-native';

export interface CartListProps {
    name: string
}

export const CartList = ({
    name
}: CartListProps) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg text-center mb-5">Carrinho</Text>
      <Text className="text-center">O carrinho do {name} está vazio</Text>
    </View>
  );
} 