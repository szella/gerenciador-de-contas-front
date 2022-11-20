import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesaRoutingModule } from './despesa-routing.module';
import { DespesaComponent } from '../despesa/despesa.component';


@NgModule({
  declarations: [
    DespesaComponent
  ],
  imports: [
    CommonModule,
    DespesaRoutingModule
  ]
})
export class DespesaModule { }
