import { TestBed } from '@angular/core/testing';

import { ServiceConfigurationByProviderService } from './service-configuration-by-provider.service';

describe('ServiceConfigurationByProviderService', () => {
  let service: ServiceConfigurationByProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceConfigurationByProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
