import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../context/useAuth";
import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";

export function RouteSelector() {
  const { isLoggedIn, isReady } = useAuth();

  if (!isReady) {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <ActivityIndicator size="large" color="#EE6B10" />
      </View>
    );
  }
  return isLoggedIn() ? <AppRoutes /> : <AuthRoutes />;
}
