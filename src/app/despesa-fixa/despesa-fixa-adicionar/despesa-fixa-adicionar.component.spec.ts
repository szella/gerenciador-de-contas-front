import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaFixaAdicionarComponent } from './despesa-fixa-adicionar.component';

describe('DespesaFixaAdicionarComponent', () => {
  let component: DespesaFixaAdicionarComponent;
  let fixture: ComponentFixture<DespesaFixaAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaFixaAdicionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespesaFixaAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
