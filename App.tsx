import "./src/global.css";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/context/useAuth";
import { RouteSelector } from "./src/routes/RouteSelector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <NavigationContainer>
          <RouteSelector />
          <Toast />
        </NavigationContainer>
      </UserProvider>
    </QueryClientProvider>
  );
}
