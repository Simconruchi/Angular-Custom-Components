import { TestBed } from '@angular/core/testing';

import { CustomOtpService } from './custom-otp.service';

describe('CustomOtpService', () => {
  let service: CustomOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
