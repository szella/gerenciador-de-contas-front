import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaoAdicionarComponent } from './cartao/cartao-adicionar/cartao-adicionar.component';
import { CartaoComponent } from './cartao/cartao.component';
import { CompraCartaoAdicionarComponent } from './compra-cartao/compra-cartao-adicionar/compra-cartao-adicionar.component';
import { CompraCartaoComponent } from './compra-cartao/compra-cartao.component';
import { DespesaFixaAdicionarComponent } from './despesa-fixa/despesa-fixa-adicionar/despesa-fixa-adicionar.component';
import { DespesaFixaComponent } from './despesa-fixa/despesa-fixa.component';
import { DespesaAdicionarComponent } from './despesa/despesa-adicionar/despesa-adicionar.component';
import { DespesaComponent } from './despesa/despesa.component';
import { GastoComponent } from './gasto/gasto.component';
import { HomeComponent } from './home/home.component';
import { RecebimentoAdicionarComponent } from './recebimento/recebimento-adicionar/recebimento-adicionar.component';
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
      {
        path: 'adicionar',
        component: CartaoAdicionarComponent,
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
      {
        path: 'adicionar',
        component: CompraCartaoAdicionarComponent,
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
      {
        path: 'adicionar',
        component: DespesaAdicionarComponent,
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
      {
        path: 'adicionar',
        component: DespesaFixaAdicionarComponent,
      },
    ],
  },{
    path: 'recebimentos',
    children: [
      {
        path: '',
        component: RecebimentoComponent,
      },
      {
        path: 'adicionar',
        component: RecebimentoAdicionarComponent,
      },
    ],
  },
  {
    path: 'gastos',
    component: GastoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
