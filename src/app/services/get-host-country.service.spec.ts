import { TestBed } from '@angular/core/testing';

import { GetHostCountryService } from './get-host-country.service';

describe('GetHostCountryService', () => {
  let service: GetHostCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHostCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
