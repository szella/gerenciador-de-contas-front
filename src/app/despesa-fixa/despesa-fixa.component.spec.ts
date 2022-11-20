import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaFixaComponent } from './despesa-fixa.component';

describe('DespesaFixaComponent', () => {
  let component: DespesaFixaComponent;
  let fixture: ComponentFixture<DespesaFixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DespesaFixaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DespesaFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
