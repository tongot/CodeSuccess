import { TestBed } from '@angular/core/testing';

import { CampingOutdoorService } from './camping-outdoor.service';

describe('CampingOutdoorService', () => {
  let service: CampingOutdoorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampingOutdoorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
