import { Despesa } from './despesa';

export interface DespesaFixa {
  id?: number;
  valor?: number;
  mes?: number;
  ano?: number;
  dataCadastro?: Date;
  despesa?: Despesa;
}
