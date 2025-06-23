import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

const LOCAL_IP = "192.168.0.150";

const HOST =
  Platform.OS === "android"
    ? "http://10.0.2.2:5108"
    : Platform.OS === "web"
      ? "http://localhost:5108"
      : `http://${LOCAL_IP}:5108`;

console.log("valor do HOST: ", HOST);

export const umioApi: AxiosInstance = axios.create({
  baseURL: HOST,
  timeout: 5000,
});
