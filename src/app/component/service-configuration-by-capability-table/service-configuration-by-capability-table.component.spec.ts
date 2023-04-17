import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConfigurationByCapabilityTableComponent } from './service-configuration-by-capability-table.component';

describe('ServiceConfigurationByCapabilityTableComponent', () => {
  let component: ServiceConfigurationByCapabilityTableComponent;
  let fixture: ComponentFixture<ServiceConfigurationByCapabilityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceConfigurationByCapabilityTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceConfigurationByCapabilityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
