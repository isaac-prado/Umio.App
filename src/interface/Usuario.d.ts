import { Cliente } from "./Cliente"

export enum Provedor {
    Umio,
    Google,
    Apple,
}

export interface Usuario {
    id: string
    cliente: Cliente
    provedor: Provedor
    senha: string
}