import { CompraCartao } from './compra-cartao';
import { DespesaFixa } from './despesa-fixa';
import { Recebimento } from './recebimento';

export interface GastosPorMes {
  mes?: number;
  comprasCartao?: CompraCartao[];
  despesasFixa?: DespesaFixa[];
  recebimentos?: Recebimento[];
}
