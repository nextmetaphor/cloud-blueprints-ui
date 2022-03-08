import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConfigurationByProviderComponent } from './service-configuration-by-provider.component';

describe('ServiceConfigurationByProviderComponent', () => {
  let component: ServiceConfigurationByProviderComponent;
  let fixture: ComponentFixture<ServiceConfigurationByProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceConfigurationByProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConfigurationByProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
