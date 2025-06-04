export enum FormaPagamento {
    CartaoCredito,
    Pix,
    Maquina,
    Dinheiro,
}

export interface Pagamento {
    formaPagamento: FormaPagamento
    valorTroco?: number
}