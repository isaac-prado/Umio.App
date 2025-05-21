import { Cliente } from "./Cliente"

export interface Endereco {
    //id: string
    cep: string
    rua: string
    bairro: string
    numero: string
    cidade: string
    uf: string
    //cliente: Cliente
}