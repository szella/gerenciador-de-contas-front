import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Despesa } from 'src/app/compartilhado/model/despesa';
import { DespesaSalvar } from 'src/app/compartilhado/model/despesa-salvar';
import { DespesaService } from 'src/app/compartilhado/service/despesa.service';

@Component({
  selector: 'app-despesa-adicionar',
  templateUrl: './despesa-adicionar.component.html',
  styleUrls: ['./despesa-adicionar.component.scss'],
})
export class DespesaAdicionarComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private despesaService: DespesaService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
    });
  }

  salvar(): void {
    if (this.formulario.valid) {
      const data = this.formulario.value as DespesaSalvar;

      this.despesaService.salvar(data).subscribe((result: Despesa) => {
        this.router.navigateByUrl('/despesas');
      });
    }
  }
}
