import { TestBed } from '@angular/core/testing';

import { ListaclassService } from './listaclass.service';

describe('ListaclassService', () => {
  let service: ListaclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
