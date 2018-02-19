import { TestBed, inject } from '@angular/core/testing';

import { GeolookupService } from './geolookup.service';

describe('GeolookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolookupService]
    });
  });

  it('should be created', inject([GeolookupService], (service: GeolookupService) => {
    expect(service).toBeTruthy();
  }));
});
