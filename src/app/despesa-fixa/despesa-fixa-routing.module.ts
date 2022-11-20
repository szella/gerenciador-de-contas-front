import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesaFixaComponent } from './despesa-fixa.component';

const routes: Routes = [{
  path: '',
  component: DespesaFixaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesaFixaRoutingModule { }
