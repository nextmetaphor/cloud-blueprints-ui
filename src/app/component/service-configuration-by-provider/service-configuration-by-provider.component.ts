import {Component, OnInit} from '@angular/core';
import {
    Provider,
    Service,
    ServiceConfiguration,
    ServiceConfigurationByProviderService
} from "../../service/service-configuration-by-provider.service";
import {
    Capability,
    Category,
    ServiceCapabilityService
} from "../../service/service-capability/service-capability.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {MatOptionSelectionChange} from "@angular/material/core";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-service-configuration-by-provider',
    templateUrl: './service-configuration-by-provider.component.html',
    styleUrls: ['./service-configuration-by-provider.component.css']
})
export class ServiceConfigurationByProviderComponent implements OnInit {

    providers: Provider[] = [];
    capabilities: Capability[] = [];

    selectedProvider?: Provider;
    selectedService?: Service;
    step = 0;

    myControl = new FormControl();

    capabilityFilter?: Observable<Capability[]>;
    providersFilter?: Observable<Provider[]>;

    constructor(private _formBuilder: FormBuilder, private serviceCapabilityService: ServiceCapabilityService,
                private taxonomyService: ServiceConfigurationByProviderService, private domSanitizer: DomSanitizer) {
    }

    myReader.onloadend = (e) => {
        this.base64Image = this.domSanitizer.bypassSecurityTrustUrl(myReader.result);
        console.log(this.base64Image);
    }

    private _filterCategories(categories: Category[], value: string): Category[] {
        const filterValue = value.toLowerCase();
        return categories.filter(option => option.name.toLowerCase().includes(filterValue))
    }

    private _filterCapabilities(value: string): Capability[] {
        if (value) {
            return this.capabilities
                .map(capability => ({
                    ID: capability.ID,
                    name: capability.name,
                    description: capability.description,
                    categories: this._filterCategories(capability.categories, value)
                }))
                .filter(capability => capability.categories.length > 0);
        }

        return this.capabilities;
    }

    private _filterConfigurations(configurations: ServiceConfiguration[], subcategoryID: string): ServiceConfiguration[] {
        return configurations.filter(configuration => {
            let found = false
            for (let i = 0; i < configuration.subcategories.length; i++) {
                found = configuration.subcategories[i].ID === subcategoryID
                if (found) {
                    break
                }
            }

            return found
        })
    }

    private _filterServices(services: Service[], subcategoryID: string): Service[] {
        if (subcategoryID) {
            return services
                .map(service => ({
                    ID: service.ID,
                    name: service.name,
                    description: service.description,
                    link: service.link,
                    imgSrc: service.imgSrc,
                    configurations: this._filterConfigurations(service.configurations, subcategoryID)
                }))
                .filter(service => service.configurations.length > 0);
        }

        return services;
    }

    private _filterProviders(subcategoryID: string): Provider[] {
        if (subcategoryID) {
            return this.providers
                .map(provider => ({
                    ID: provider.ID,
                    name: provider.name,
                    description: provider.description,
                    services: this._filterServices(provider.services, subcategoryID)
                }))
                .filter(provider => provider.services.length > 0);
        }

        return this.providers;
    }

    onSelectionChange(event: MatOptionSelectionChange, groupName: string) {
        this._filterProviders(groupName);
        this.setStep(0);
    }

    ngOnInit(): void {
        this.capabilityFilter = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterCapabilities(value))
        );

        this.providersFilter = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterProviders(value))
        );

        this.serviceCapabilityService.getCapabilities().subscribe(capabilities => {
            Object.assign(this.capabilities, capabilities)

            this.taxonomyService.getTaxonomy().subscribe(taxonomies => {
                Object.assign(this.providers, taxonomies);
            });
        })
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
