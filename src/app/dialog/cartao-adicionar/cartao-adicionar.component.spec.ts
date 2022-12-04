import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoAdicionarComponent } from './cartao-adicionar.component';

describe('CartaoAdicionarComponent', () => {
  let component: CartaoAdicionarComponent;
  let fixture: ComponentFixture<CartaoAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartaoAdicionarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaoAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
