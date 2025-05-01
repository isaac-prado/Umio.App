import { Categoria } from "./Categoria"
import { Cupom } from "./Cupom"

export interface Produto {
    id: string
    nome: string
    descricao: string
    categoria: Categoria
    comentarios: string
    imagem: string
    habilitarAdicionais: boolean
    habilitarMolhos: boolean
    habilitarAcompanhamentos: boolean
    cupom?: Cupom
}