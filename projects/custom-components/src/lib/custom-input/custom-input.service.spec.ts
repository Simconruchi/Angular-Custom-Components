import { TestBed } from '@angular/core/testing';

import { CustomInputService } from './custom-input.service';

describe('CustomInputService', () => {
  let service: CustomInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
