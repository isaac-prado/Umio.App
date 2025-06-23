import React from "react";
import { FinalizarPedido } from "../../pages/Order/FinalizarPedido";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useOrder } from "../../context/useOrder";
import { View, Text } from "react-native";

export default function FinalizarPedidoScreen() {
  const { navigate, goBack } = useAppNavigation();
  const { currentOrder, addToCart, setCurrentOrder } = useOrder();

  if (!currentOrder) {
    return (
      <View className="flex-1 bg-black items-center justify-center">
        <Text className="text-white text-lg">Nenhum pedido encontrado</Text>
      </View>
    );
  }

  const handleFinalizarPedido = () => {
    // Adicionar ao carrinho
    addToCart(currentOrder);

    // Limpar pedido atual
    setCurrentOrder(null);

    // Voltar para a home com o menu inferior
    navigate("BottomTab");
  };

  const handleAdicionarMaisItens = () => {
    // Adicionar ao carrinho
    addToCart(currentOrder);

    // Limpar pedido atual para permitir novo pedido
    setCurrentOrder(null);

    // Voltar para a home com o menu inferior
    navigate("BottomTab");
  };

  // Filtrar adicionais e molhos extra que foram selecionados
  const adicionaisSelecionados = currentOrder.adicionais.filter(
    (a) => a.quantidade > 0,
  );
  const molhosExtraSelecionados =
    currentOrder.molhosExtra?.filter((m) => m.quantidade > 0) || [];

  return (
    <FinalizarPedido
      produto={currentOrder.produto}
      molhoSelecionado={currentOrder.molhoSelecionado}
      adicionais={adicionaisSelecionados}
      molhosExtra={molhosExtraSelecionados}
      onGoBack={goBack}
      onFinalizarPedido={handleFinalizarPedido}
      onAdicionarMaisItens={handleAdicionarMaisItens}
    />
  );
}
