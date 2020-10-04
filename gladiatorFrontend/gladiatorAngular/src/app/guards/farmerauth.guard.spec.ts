import { TestBed } from '@angular/core/testing';

import { FarmerauthGuard } from './farmerauth.guard';

describe('FarmerauthGuard', () => {
  let guard: FarmerauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FarmerauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
