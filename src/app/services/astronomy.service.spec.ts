import { TestBed, inject } from '@angular/core/testing';

import { AstronomyService } from './astronomy.service';

describe('AstronomyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AstronomyService]
    });
  });

  it('should be created', inject([AstronomyService], (service: AstronomyService) => {
    expect(service).toBeTruthy();
  }));
});
