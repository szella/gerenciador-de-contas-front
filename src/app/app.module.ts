import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
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
import { RecebimentoComponent } from './recebimento/recebimento.component';
import { RecebimentoAdicionarComponent } from './recebimento/recebimento-adicionar/recebimento-adicionar.component';

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
    RecebimentoComponent,
    RecebimentoAdicionarComponent,
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
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
