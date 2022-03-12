import {Component, OnInit} from '@angular/core';
import {Provider, Service, ServiceConfigurationByProviderService} from "../../service/service-configuration-by-provider.service";
import {Capability, ServiceCapabilityService} from "../../service/service-capability/service-capability.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

export const _filter = (opt: string[], value: string): string[] => {
    const filterValue = value.toLowerCase();

    return opt.filter(item => item.toLowerCase().includes(filterValue));
};

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

    capabilityForm: FormGroup = this._formBuilder.group({
        capabilityGroup: '',
    });

    capabilityGroupOptions?: Observable<Capability[]>;

    constructor(private _formBuilder: FormBuilder, private serviceCapabilityService: ServiceCapabilityService,
                private taxonomyService: ServiceConfigurationByProviderService) {
    }

    private _filterGroup(value: string): Capability[] {
        const filterValue = value.toLowerCase();
        return this.capabilities.filter(option => option.name.toLowerCase().includes(filterValue));
    }

    ngOnInit(): void {
        this.capabilityGroupOptions = this.capabilityForm.get('capabilityGroup')!.valueChanges.pipe(
            startWith(''),
            map(value => this._filterGroup(value))
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
