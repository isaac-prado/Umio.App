import React from "react";
import { HomePage } from "../../pages/HomePage/HomePage";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useProdutoQuery } from "../../hooks/useProdutoQuery";
import { useOrder } from "../../context/useOrder";
import { ActivityIndicator, Text } from "react-native";
import { Produto } from "../../interface/Produto";

export default function HomePageScreen() {
  const { navigate } = useAppNavigation();
  const { setCurrentOrder } = useOrder();

  const { data, error, isLoading } = useProdutoQuery();

  const handleProductPress = (produto: Produto) => {
    // Definir o produto atual no contexto de pedido
    setCurrentOrder({
      produto,
      quantidade: 1,
      molhoSelecionado: "Potinho de Rach",
      adicionais: [],
      molhosExtra: [],
      comentarios: "",
      opcoesSelecionadas: {},
    });

    // Navegar para a tela de pedido
    navigate("Order");
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#EE6B10" />;
  }

  if (error || !data?.ok) {
    return (
      <Text style={{ color: "white", padding: 20 }}>
        Erro ao carregar produtos.
      </Text>
    );
  }

  return (
    <HomePage
      produtos={data.dados}
      onPressProfile={() => navigate("Profile")}
      onPressNotifications={() => navigate("Notifications")}
      onPressProduct={handleProductPress}
    />
  );
}
