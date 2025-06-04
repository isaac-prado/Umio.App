import "./src/global.css";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/context/useAuth";
import { RouteSelector } from "./src/routes/RouteSelector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <NavigationContainer>
          <RouteSelector />
        </NavigationContainer>
      </UserProvider>
    </QueryClientProvider>
  );
}
