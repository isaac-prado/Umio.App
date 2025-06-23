import "./src/global.css";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/context/useAuth";
import { OrderProvider } from "./src/context/useOrder";
import { RouteSelector } from "./src/routes/RouteSelector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <OrderProvider>
          <NavigationContainer>
            <RouteSelector />
          </NavigationContainer>
        </OrderProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}
