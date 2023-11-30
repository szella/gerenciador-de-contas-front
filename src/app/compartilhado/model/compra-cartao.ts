import { Cartao } from './cartao';

export interface CompraCartao {
  id?: number;
  nome?: string;
  valor?: number;
  mes?: number;
  ano?: number;
  dataCadastro?: Date;
  agrupamento?: string;
  cartao?: Cartao;
}

export interface CompraCartaoAgrupado {
  anoMes?: Date;
  valorTotal?: number;
  comprasCartao?: CompraCartao[];
}
