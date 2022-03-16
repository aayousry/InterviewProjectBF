import { TestBed } from '@angular/core/testing';

import { GetAllowedCurrenciesService } from './get-allowed-currencies.service';

describe('GetAllowedCurrenciesService', () => {
  let service: GetAllowedCurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllowedCurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
