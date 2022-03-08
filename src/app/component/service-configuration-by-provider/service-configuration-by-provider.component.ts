import { Component, OnInit } from '@angular/core';
import {Provider, ServiceConfigurationByProviderService} from "../../service/service-configuration-by-provider.service";

@Component({
  selector: 'app-service-configuration-by-provider',
  templateUrl: './service-configuration-by-provider.component.html',
  styleUrls: ['./service-configuration-by-provider.component.css']
})
export class ServiceConfigurationByProviderComponent implements OnInit {

  taxonomy: Provider[] = [];

  constructor(private taxonomyService: ServiceConfigurationByProviderService) { }

  ngOnInit(): void {
    this.taxonomyService.getTaxonomy().subscribe(sr => {
      Object.assign(this.taxonomy, sr);
    });
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
