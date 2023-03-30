import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceByCapabilityComponent } from './service-by-capability.component';

describe('ServiceByCapabilityComponent', () => {
  let component: ServiceByCapabilityComponent;
  let fixture: ComponentFixture<ServiceByCapabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceByCapabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceByCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
