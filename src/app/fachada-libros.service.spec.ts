import { TestBed, inject } from '@angular/core/testing';

import { FachadaLibrosService } from './fachada-libros.service';

describe('FachadaLibrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FachadaLibrosService]
    });
  });

  it('should be created', inject([FachadaLibrosService], (service: FachadaLibrosService) => {
    expect(service).toBeTruthy();
  }));
});
