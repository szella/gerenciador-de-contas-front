import { GastosPorMes } from './gastos-por-mes';

export interface GastosPorAno {
  ano?: number;
  meses?: GastosPorMes[];
}
