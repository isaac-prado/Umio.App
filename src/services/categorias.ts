import { umioApi } from "./umioApi";

export interface Categoria {
  id: number;
  categoria: string;
}

interface CategoriaResponse {
  dados: Categoria[];
  mensagem: string;
  ok: boolean;
}

export const buscarCategorias = async (): Promise<Categoria[]> => {
  try {
    const response = await umioApi.get<CategoriaResponse>("/CategoriaProduto");
    return response.data.dados;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    throw error;
  }
};
