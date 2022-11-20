import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraCartaoComponent } from './compra-cartao.component';

const routes: Routes = [{
  path: '',
  component: CompraCartaoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraCartaoRoutingModule { }
