import { Endereco } from "./Endereco"
import { Pedido } from "./Pedido"

export interface Cliente {
    id: string
    nome: string
    email: string
    telefone: string
    pontos: number
    //senha: string
    endereco: Endereco
    pedidos: Pedido | []
}