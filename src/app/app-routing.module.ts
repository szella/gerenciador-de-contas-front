import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./home/home-routing.module').then(m => m.HomeRoutingModule)
}, {
  path: 'cartoes',
  loadChildren: () => import('./cartao/cartao-routing.module').then(m => m.CartaoRoutingModule)
}, {
  path: 'compras-cartao',
  loadChildren: () => import('./compra-cartao/compra-cartao.module').then(m => m.CompraCartaoModule)
}, {
  path: 'despesas',
  loadChildren: () => import('./despesa/despesa-routing.module').then(m => m.DespesaRoutingModule)
}, {
  path: 'despesas-fixas',
  loadChildren: () => import('./despesa-fixa/despesa-fixa-routing.module').then(m => m.DespesaFixaRoutingModule)
}, {
  path: 'gastos',
  loadChildren: () => import('./gasto/gasto-routing.module').then(m => m.GastoRoutingModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
