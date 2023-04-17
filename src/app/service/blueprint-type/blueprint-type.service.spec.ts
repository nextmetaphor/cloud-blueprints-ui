import { TestBed } from '@angular/core/testing';

import { BlueprintTypeService } from './blueprint-type.service';

describe('BlueprintTypeService', () => {
  let service: BlueprintTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueprintTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
