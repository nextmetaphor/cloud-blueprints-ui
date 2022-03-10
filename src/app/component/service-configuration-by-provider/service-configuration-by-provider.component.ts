import { Component, OnInit } from '@angular/core';
import {
  Provider,
  Service,
  ServiceConfigurationByProviderService
} from "../../service/service-configuration-by-provider.service";

@Component({
  selector: 'app-service-configuration-by-provider',
  templateUrl: './service-configuration-by-provider.component.html',
  styleUrls: ['./service-configuration-by-provider.component.css']
})
export class ServiceConfigurationByProviderComponent implements OnInit {

  providers: Provider[] = [];
  selectedProvider?: Provider;
  selectedService?: Service;
  step = 0;


  constructor(private taxonomyService: ServiceConfigurationByProviderService) { }

  ngOnInit(): void {
    this.taxonomyService.getTaxonomy().subscribe(sr => {
      Object.assign(this.providers, sr);
    });
  }

  setStep(index: number) {
    this.step = index;
    switch (index) {
      case 0:
        this.selectedProvider = undefined;
        this.selectedService = undefined;
        break;

      case 1:
        this.selectedService = undefined;
        break;
    }
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  providerClicked(provider: Provider) {
    this.selectedProvider = provider;
    this.setStep(1);
  }

  serviceClicked(service: Service) {
    this.selectedService = service;
    this.setStep(2);
  }

}
