import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaAdicionarComponent } from './despesa-adicionar.component';

describe('DespesaAdicionarComponent', () => {
  let component: DespesaAdicionarComponent;
  let fixture: ComponentFixture<DespesaAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaAdicionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespesaAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
