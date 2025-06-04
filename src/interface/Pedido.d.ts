import { Endereco } from "./Endereco"
import { Pagamento } from "./Pagamento"
import { Produto } from "./Produto"
import { Cupom } from "./Cupom"
import { Cliente } from "./Cliente"

export enum StatusPedido {
    Pendente = 'pendente',
    EmPreparo = 'em-preparo',
    EmTransito = 'em-transito',
    Entregue = 'entregue',
    Cancelado = 'cancelado',
  }

export interface Pedido {
    id: string
    produtos: Produto[]
    comentario?: string
    valorEntrega: string
    precoTotal: number
    pontosAcumulados: number
    cliente: Cliente
    status: StatusPedido
    cupom?: Cupom
    endereco: Endereco
    pagamento: Pagamento
}