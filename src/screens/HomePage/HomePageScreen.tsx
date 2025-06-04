import React from "react";
import { HomePage } from "../../pages/HomePage/HomePage";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useProdutoQuery } from "../../hooks/useProdutoQuery";
import { ActivityIndicator, Text } from "react-native";

export default function HomePageScreen() {
  const { navigate } = useAppNavigation();

  const { data, error, isLoading } = useProdutoQuery();

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
    />
  );
}
