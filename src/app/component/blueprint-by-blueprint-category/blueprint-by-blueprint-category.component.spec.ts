import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintByBlueprintCategoryComponent } from './blueprint-by-blueprint-category.component';

describe('BlueprintByBlueprintCategoryComponent', () => {
  let component: BlueprintByBlueprintCategoryComponent;
  let fixture: ComponentFixture<BlueprintByBlueprintCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueprintByBlueprintCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueprintByBlueprintCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
