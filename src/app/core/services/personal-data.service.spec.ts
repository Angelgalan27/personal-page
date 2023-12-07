import { TestBed } from '@angular/core/testing';

import { DatosPersonalesService } from './personal-data.service';

describe('DatosPersonalesService', () => {
  let service: DatosPersonalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPersonalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
