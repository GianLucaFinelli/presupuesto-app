import { TestBed } from '@angular/core/testing';

import { CotizadorPrespuestoService } from './cotizador-prespuesto.service';

describe('CotizadorPrespuestoService', () => {
  let service: CotizadorPrespuestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotizadorPrespuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
