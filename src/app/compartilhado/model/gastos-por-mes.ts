import { CompraCartao } from './compra-cartao';
import { DespesaFixa } from './despesa-fixa';

export interface GastosPorMes {
  mes?: number;
  comprasCartao?: CompraCartao;
  despesasFixa?: DespesaFixa;
}
