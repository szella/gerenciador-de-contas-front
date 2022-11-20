import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CartaoComponent } from './cartao/cartao.component';
import { CompraCartaoComponent } from './compra-cartao/compra-cartao.component';
import { DespesaFixaComponent } from './despesa-fixa/despesa-fixa.component';
import { DespesaComponent } from './despesa/despesa.component';
import { GastoComponent } from './gasto/gasto.component';
import { CartaoAdicionarComponent } from './cartao/cartao-adicionar/cartao-adicionar.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CartaoComponent,
    CompraCartaoComponent,
    DespesaComponent,
    DespesaFixaComponent,
    GastoComponent,
    CartaoAdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
