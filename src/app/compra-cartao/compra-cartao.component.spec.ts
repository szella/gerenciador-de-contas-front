import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraCartaoComponent } from './compra-cartao.component';

describe('CompraCartaoComponent', () => {
  let component: CompraCartaoComponent;
  let fixture: ComponentFixture<CompraCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompraCartaoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CompraCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
