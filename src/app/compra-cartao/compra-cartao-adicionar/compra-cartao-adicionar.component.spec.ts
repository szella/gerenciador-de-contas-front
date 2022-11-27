import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraCartaoAdicionarComponent } from './compra-cartao-adicionar.component';

describe('CompraCartaoAdicionarComponent', () => {
  let component: CompraCartaoAdicionarComponent;
  let fixture: ComponentFixture<CompraCartaoAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompraCartaoAdicionarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompraCartaoAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
