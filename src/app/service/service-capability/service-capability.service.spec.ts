import { TestBed } from '@angular/core/testing';

import { ServiceCapabilityService } from './service-capability.service';

describe('ServiceCapabilityService', () => {
  let service: ServiceCapabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCapabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
