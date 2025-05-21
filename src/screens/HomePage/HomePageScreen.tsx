import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/types/RootStackList";
import { HomePage } from "../../pages/HomePage/HomePage";

type Navigation = NativeStackNavigationProp<
  RootStackParamList,
  "profile" | "notifications"
>;

export default function HomePageScreen() {
  const { navigate } = useNavigation<Navigation>();

  return (
    <HomePage
      onPressProfile={() => navigate("profile")}
      onPressNotifications={() => navigate("notifications")}
    />
  );
}
