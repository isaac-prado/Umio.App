import { Cliente } from "../interface/Cliente";
import { umioApi } from "./umioApi";

export const registerApi = async (email: string, senha: string) => {
  try {
    const data = await umioApi.post<Cliente>("/register", {
      email: email,
      senha: senha,
    });

    return data;
  } catch (error) {
    return error;
  }
};
