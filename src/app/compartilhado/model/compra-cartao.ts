import { Cartao } from "./cartao"

export interface CompraCartao {
    id?: number
    nome?: string
    valor?: number
    mes?: number
    ano?: number
    dataCadastro?: Date
    cartao?: Cartao
}