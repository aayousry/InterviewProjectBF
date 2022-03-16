import { TestBed } from '@angular/core/testing';

import { GetDestinationCountryService } from './get-destination-country.service';

describe('GetDestinationCountryService', () => {
  let service: GetDestinationCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDestinationCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
