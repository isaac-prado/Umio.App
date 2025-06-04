import { useQuery } from "@tanstack/react-query";
import { Produto } from "../interface/Produto";
import { umioApi } from "../services/umioApi";

interface ProdutoResponse {
  dados: Produto[];
  mensagem: string | null;
  ok: boolean;
}

export const useProdutoQuery = () => {
  return useQuery<ProdutoResponse>({
    queryKey: ["produtos"],
    queryFn: async () => {
      const response = await umioApi.get("/Produto");
      return response.data;
    },
  });
};
