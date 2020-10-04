import { TestBed } from '@angular/core/testing';

import { BidderauthService } from './bidderauth.service';

describe('BidderauthService', () => {
  let service: BidderauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidderauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
