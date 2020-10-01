import { TestBed } from '@angular/core/testing';

import { BabyToddlerService } from './baby-toddler.service';

describe('BabyToddlerService', () => {
  let service: BabyToddlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabyToddlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
