import { TestBed } from '@angular/core/testing';

import { PerformancemetricsService } from './performancemetrics.service';

describe('PerformancemetricsService', () => {
  let service: PerformancemetricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformancemetricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
