import { TestBed } from '@angular/core/testing';

import { FarmerauthService } from './farmerauth.service';

describe('FarmerauthService', () => {
  let service: FarmerauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
