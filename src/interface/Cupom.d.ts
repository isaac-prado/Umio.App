interface DescontoProduto {
    produtos: Produto[]
    valorDesconto: number
}

interface DescontoPorcentagem {
    porcentagemDesconto: number
}

export interface Cupom {
    id: string
    codigo: string
    status: boolean
    desconto: DescontoPorcentagem | DescontoProduto
}