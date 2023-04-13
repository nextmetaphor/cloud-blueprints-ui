import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintByArchitectureFrameworkComponent } from './blueprint-by-architecture-framework.component';

describe('BlueprintByArchitectureFrameworkComponent', () => {
  let component: BlueprintByArchitectureFrameworkComponent;
  let fixture: ComponentFixture<BlueprintByArchitectureFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueprintByArchitectureFrameworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueprintByArchitectureFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
