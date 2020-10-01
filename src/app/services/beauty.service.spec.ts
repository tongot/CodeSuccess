import { TestBed } from '@angular/core/testing';

import { BeautyService } from './beauty.service';

describe('BeautyService', () => {
  let service: BeautyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeautyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
