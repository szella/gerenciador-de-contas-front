import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
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
import { CartaoComponent } from './cartao/cartao.component';
import { CompraCartaoComponent } from './compra-cartao/compra-cartao.component';
import { DespesaFixaComponent } from './despesa-fixa/despesa-fixa.component';
import { DespesaComponent } from './despesa/despesa.component';
import { CartaoAdicionarComponent } from './dialog/cartao-adicionar/cartao-adicionar.component';
import { CompraCartaoAdicionarComponent } from './dialog/compra-cartao-adicionar/compra-cartao-adicionar.component';
import { DespesaAdicionarComponent } from './dialog/despesa-adicionar/despesa-adicionar.component';
import { DespesaFixaAdicionarComponent } from './dialog/despesa-fixa-adicionar/despesa-fixa-adicionar.component';
import { RecebimentoAdicionarComponent } from './dialog/recebimento-adicionar/recebimento-adicionar.component';
import { GastoComponent } from './gasto/gasto.component';
import { RecebimentoComponent } from './recebimento/recebimento.component';

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
    MatDialogModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
