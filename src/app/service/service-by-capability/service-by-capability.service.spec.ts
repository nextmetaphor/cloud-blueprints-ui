import { TestBed } from '@angular/core/testing';

import { ServiceByCapabilityService } from './service-by-capability.service';

describe('ServiceByCapabilityService', () => {
  let service: ServiceByCapabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceByCapabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
