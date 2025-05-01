import { AuthRoutes } from "./AuthRoutes";
import { AppRoutes } from "./AppRoutes";
import { useState } from "react";

export function RouteSelector() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // bolar um singleton para autenticar
  
  return (isAuthenticated ? <AppRoutes/> : <AuthRoutes />)
}