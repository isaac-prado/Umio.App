import axios, { AxiosInstance } from "axios";


export const umioApi: AxiosInstance = axios.create({
  baseURL: "http://localhost:5108/api",
})
