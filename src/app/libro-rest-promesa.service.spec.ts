import { TestBed, inject } from '@angular/core/testing';

import { LibroRestPromesaService } from './libro-rest-promesa.service';

describe('LibroRestPromesaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibroRestPromesaService]
    });
  });

  it('should be created', inject([LibroRestPromesaService], (service: LibroRestPromesaService) => {
    expect(service).toBeTruthy();
  }));
});
