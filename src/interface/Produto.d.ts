import { Categoria } from "./Categoria";
import { Cupom } from "./Cupom";

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  categoriaId: string;
  ativo: boolean;

  //   habilitarAdicionais: boolean;
  //   habilitarMolhos: boolean;
  //   habilitarAcompanhamentos: boolean;
  //   cupom?: Cupom;
  //   comentarios: string;
}
