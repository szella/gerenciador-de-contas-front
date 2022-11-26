import { TestBed } from '@angular/core/testing';

import { CompraCartaoService } from './compra-cartao.service';

describe('CompraCartaoService', () => {
  let service: CompraCartaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraCartaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
