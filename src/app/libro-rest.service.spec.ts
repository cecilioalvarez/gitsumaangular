import { TestBed, inject } from '@angular/core/testing';

import { LibroRESTService } from './libro-rest.service';

describe('LibroRESTService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibroRESTService]
    });
  });

  it('should be created', inject([LibroRESTService], (service: LibroRESTService) => {
    expect(service).toBeTruthy();
  }));
});
