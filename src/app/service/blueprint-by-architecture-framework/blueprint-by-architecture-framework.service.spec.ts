import { TestBed } from '@angular/core/testing';

import { BlueprintByArchitectureFrameworkService } from './blueprint-by-architecture-framework.service';

describe('BlueprintByArchitectureFrameworkService', () => {
  let service: BlueprintByArchitectureFrameworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueprintByArchitectureFrameworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
