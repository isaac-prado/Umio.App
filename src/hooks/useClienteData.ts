import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/useAuth";
import { Cliente } from "../interface/Cliente";
import { umioApi } from "../services/umioApi";

export const useClientData = () => {
  const { clienteId, token } = useAuth();

  return useQuery<Cliente>({
    queryKey: ["cliente", clienteId],
    queryFn: async () => {
      const response = await umioApi.get("/api/clientes", {
        headers: {
          Authorization: token!,
        },
        params: {
          id: clienteId,
        },
      });
      const cliente = response.data?.dados?.[0];

      if (!cliente) {
        throw new Error("Cliente não encontrado.");
      }

      return cliente;
    },
    enabled: !!clienteId && !!token,
  });
};
