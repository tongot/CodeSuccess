import { TestBed } from '@angular/core/testing';

import { BannerSliderServiceService } from './banner-slider-service.service';

describe('BannerSliderServiceService', () => {
  let service: BannerSliderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerSliderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
