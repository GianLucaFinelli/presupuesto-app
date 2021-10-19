import { TestBed } from '@angular/core/testing';

import { LocalstorageCotizacionesService } from './localstorage-cotizaciones.service';

describe('LocalstorageCotizacionesService', () => {
  let service: LocalstorageCotizacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorageCotizacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
