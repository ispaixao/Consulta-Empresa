import { TestBed } from '@angular/core/testing';

import { ConsultarEmpresaService } from './consultar-empresa.service';

describe('ConsultarEmpresaService', () => {
  let service: ConsultarEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
