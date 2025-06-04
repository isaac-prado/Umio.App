import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../context/useAuth";
import { umioApi } from "../services/umioApi";

type UpdateClientPayload = {
  nome?: string;
  email?: string;
  telefone?: string;
  pontos?: number;
};

export const useUpdateClient = () => {
  const { clienteId, token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (dadosAtualizados: UpdateClientPayload) => {
      if (!token || !clienteId) {
        throw new Error("Usuário não autenticado.");
      }

      const response = await umioApi.patch(
        "/api/clientes/${clienteId}",
        dadosAtualizados,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      return response.data;
    },
    onSuccess: () => {
      if (clienteId)
        queryClient.invalidateQueries({ queryKey: ["cliente", clienteId] });
    },
  });
};
