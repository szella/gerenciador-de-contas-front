import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaoComponent } from './cartao/cartao.component';
import { CompraCartaoComponent } from './compra-cartao/compra-cartao.component';
import { DespesaFixaComponent } from './despesa-fixa/despesa-fixa.component';
import { DespesaComponent } from './despesa/despesa.component';
import { HomeComponent } from './home/home.component';
import { RecebimentoComponent } from './recebimento/recebimento.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'cartoes',
    children: [
      {
        path: '',
        component: CartaoComponent,
      },
    ],
  },
  {
    path: 'compras-cartao',
    children: [
      {
        path: '',
        component: CompraCartaoComponent,
      },
    ],
  },
  {
    path: 'despesas',
    children: [
      {
        path: '',
        component: DespesaComponent,
      },
    ],
  },
  {
    path: 'despesas-fixas',
    children: [
      {
        path: '',
        component: DespesaFixaComponent,
      },
    ],
  },
  {
    path: 'recebimentos',
    children: [
      {
        path: '',
        component: RecebimentoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
