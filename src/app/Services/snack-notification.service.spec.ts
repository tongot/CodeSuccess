import { TestBed } from '@angular/core/testing';

import { SnackNotificationService } from './snack-notification.service';

describe('SnackNotificationService', () => {
  let service: SnackNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
