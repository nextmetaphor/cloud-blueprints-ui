import {Component} from '@angular/core';

import {
    Capability,
    Category,
    Subcategory
} from "../../service/service-capability/service-capability.service";
import {FormBuilder, FormControl} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {ServiceByCapabilityService} from "../../service/service-by-capability/service-by-capability.service";


@Component({
    selector: 'app-service-by-capability',
    templateUrl: './service-by-capability.component.html',
    styleUrls: ['./service-by-capability.component.css']
})
export class ServiceByCapabilityComponent {
    capabilities: Capability[] = [];

    selectedCapability?: Capability;
    selectedCategory?: Category;
    selectedSubcategory?: Subcategory;

    step = 0;

    myControl = new FormControl();

    capabilitiesFilter?: Observable<Capability[]>;

    sanitizer: DomSanitizer;

    constructor(private _formBuilder: FormBuilder, private serviceByCapabilityService: ServiceByCapabilityService, private domSanitizer: DomSanitizer) {
        this.sanitizer = domSanitizer
    }

    setStep(index: number) {
        this.step = index;
        switch (index) {
            case 0:
                this.selectedCapability = undefined;
                this.selectedCategory = undefined;
                this.selectedSubcategory = undefined;
                break;

            case 1:
                this.selectedCategory = undefined;
                this.selectedSubcategory = undefined;
                break;

            case 2:
                this.selectedSubcategory = undefined;
                break;
        }
    }

    ngOnInit(): void {
        this.capabilitiesFilter = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterCapabilities(value))
        );


        this.serviceByCapabilityService.getServiceByCapabilities().subscribe(capabilities => {
            Object.assign(this.capabilities, capabilities)
        })
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

    capabilityClicked(capability: Capability) {
        this.selectedCapability = capability;
        this.setStep(1);
   }

    categoryClicked(category: Category) {
        this.selectedCategory = category;
        this.setStep(2);
    }

    subcategoryClicked(subcategory: Subcategory) {
        this.selectedSubcategory = subcategory;
        this.setStep(3);
    }
}
