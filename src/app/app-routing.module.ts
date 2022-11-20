import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaoAdicionarComponent } from './cartao/cartao-adicionar/cartao-adicionar.component';
import { CartaoComponent } from './cartao/cartao.component';
import { CompraCartaoComponent } from './compra-cartao/compra-cartao.component';
import { DespesaFixaComponent } from './despesa-fixa/despesa-fixa.component';
import { DespesaComponent } from './despesa/despesa.component';
import { GastoComponent } from './gasto/gasto.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
}, {
  path: 'cartoes',
  children: [{
    path: '',
    component: CartaoComponent,
  }, {
    path: 'adicionar',
    component: CartaoAdicionarComponent
  }]
}, {
  path: 'compras-cartao',
  component: CompraCartaoComponent
}, {
  path: 'despesas',
  component: DespesaComponent
}, {
  path: 'despesas-fixas',
  component: DespesaFixaComponent
}, {
  path: 'gastos',
  component: GastoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
