import { Text, View } from 'react-native';

export default function CartScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg text-center mb-5">Carrinho</Text>
      <Text className="text-center">Seu carrinho está vazio</Text>
    </View>
  );
} 