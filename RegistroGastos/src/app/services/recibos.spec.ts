import { TestBed } from '@angular/core/testing';

import { Recibos } from './recibos';

describe('Recibos', () => {
  let service: Recibos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Recibos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
