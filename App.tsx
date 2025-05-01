import "./src/global.css"
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RouteSelector } from "./src/routes/RouteSelector";

export default function App() {
  return (
    <NavigationContainer>
      <RouteSelector />
    </NavigationContainer>
  )
}
