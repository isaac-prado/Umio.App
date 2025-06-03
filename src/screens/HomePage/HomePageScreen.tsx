import React from "react";
import { HomePage } from "../../pages/HomePage/HomePage";
import { useAppNavigation } from "../../hooks/useAppNavigation";

export default function HomePageScreen() {
  const { navigate } = useAppNavigation();

  return (
    <HomePage
      onPressProfile={() => navigate("Profile")}
      onPressNotifications={() => navigate("Notifications")}
    />
  );
}
