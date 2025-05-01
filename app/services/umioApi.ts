import axios from "axios";


export const api = axios.create({
  baseURL: "UMIO_API_URL",
})
