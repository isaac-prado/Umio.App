import React from "react";
import { Order } from "../../pages/Order/Order";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useOrder } from "../../context/useOrder";
import { View, Text } from "react-native";

export default function OrderScreen() {
  const { navigate, goBack } = useAppNavigation();
  const { currentOrder } = useOrder();

  if (!currentOrder) {
    return (
      <View className="flex-1 bg-black items-center justify-center">
        <Text className="text-white text-lg">Nenhum produto selecionado</Text>
      </View>
    );
  }

  const handleNext = () => {
    // Navegar para a tela de finalizar pedido
    navigate("FinalizarPedido");
  };

  return (
    <Order
      produto={currentOrder.produto}
      onGoBack={goBack}
      onNext={handleNext}
    />
  );
}
