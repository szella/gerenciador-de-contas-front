import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CartaoAdicionarComponent } from './cartao/cartao-adicionar/cartao-adicionar.component';
import { CartaoComponent } from './cartao/cartao.component';
import { CompraCartaoAdicionarComponent } from './compra-cartao/compra-cartao-adicionar/compra-cartao-adicionar.component';
import { CompraCartaoComponent } from './compra-cartao/compra-cartao.component';
import { DespesaFixaAdicionarComponent } from './despesa-fixa/despesa-fixa-adicionar/despesa-fixa-adicionar.component';
import { DespesaFixaComponent } from './despesa-fixa/despesa-fixa.component';
import { DespesaAdicionarComponent } from './despesa/despesa-adicionar/despesa-adicionar.component';
import { DespesaComponent } from './despesa/despesa.component';
import { GastoComponent } from './gasto/gasto.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CartaoComponent,
    CartaoAdicionarComponent,
    CompraCartaoComponent,
    CompraCartaoAdicionarComponent,
    DespesaComponent,
    DespesaAdicionarComponent,
    DespesaFixaComponent,
    DespesaFixaAdicionarComponent,
    GastoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
