import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/types/RootStackList";
import { NotificationsPage } from "../../pages/NotificationsPage/NotificationsPage";

type Navigation = NativeStackNavigationProp<RootStackParamList, "home">;

export default function NotificationsPageScreen() {
  const { navigate } = useNavigation<Navigation>();

  return <NotificationsPage onPressBack={() => navigate("home")} />;
}
