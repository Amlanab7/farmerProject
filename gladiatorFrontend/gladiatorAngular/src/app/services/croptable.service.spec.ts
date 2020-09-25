import { TestBed } from '@angular/core/testing';

import { CroptableService } from './croptable.service';

describe('CroptableService', () => {
  let service: CroptableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CroptableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
