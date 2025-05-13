import { TestBed } from '@angular/core/testing';

import { AssetallocationService } from './assetallocation.service';

describe('AssetallocationService', () => {
  let service: AssetallocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetallocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
