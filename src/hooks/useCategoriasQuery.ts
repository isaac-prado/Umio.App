import { useQuery } from "@tanstack/react-query";
import { buscarCategorias, Categoria } from "../services/categorias";

export const useCategoriasQuery = () => {
  return useQuery<Categoria[]>({
    queryKey: ["categorias"],
    queryFn: buscarCategorias,
  });
};
