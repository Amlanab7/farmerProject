import { TestBed } from '@angular/core/testing';

import { BidderauthGuard } from './bidderauth.guard';

describe('BidderauthGuard', () => {
  let guard: BidderauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BidderauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
