import { TestBed } from '@angular/core/testing';

import { PricetrendService } from './pricetrend.service';

describe('PricetrendService', () => {
  let service: PricetrendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricetrendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
