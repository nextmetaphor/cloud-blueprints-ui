import { TestBed } from '@angular/core/testing';

import { BlueprintByBlueprintCategoryService } from './blueprint-by-blueprint-category.service';

describe('BlueprintByBlueprintCategoryService', () => {
  let service: BlueprintByBlueprintCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueprintByBlueprintCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
