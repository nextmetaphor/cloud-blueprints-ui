import {Component} from '@angular/core';

import {FormBuilder, FormControl} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {Observable, startWith} from "rxjs";
import {map} from "rxjs/operators";
import {
  Blueprint,
  BlueprintByBlueprintCategoryService,
  BlueprintCategory,
  BlueprintSubCategory
} from "../../service/blueprint-by-blueprint-category/blueprint-by-blueprint-category.service";


@Component({
    selector: 'blueprint-by-blueprint-category',
    templateUrl: './blueprint-by-blueprint-category.component.html',
    styleUrls: ['./blueprint-by-blueprint-category.component.css']
})
export class BlueprintByBlueprintCategoryComponent {
    blueprintCategories: BlueprintCategory[] = [];
    blueprintCategoriesFilter?: Observable<BlueprintCategory[]>;

    selectedBlueprintCategory?: BlueprintCategory;
    selectedBlueprintSubcategory?: BlueprintSubCategory;
    selectedBlueprint?: Blueprint;

    step = 0;

    myControl = new FormControl();

    sanitizer: DomSanitizer;

    constructor(private _formBuilder: FormBuilder, private blueprintByBlueprintCategoryService: BlueprintByBlueprintCategoryService, private domSanitizer: DomSanitizer) {
        this.sanitizer = domSanitizer
    }

    setStep(index: number) {
        this.step = index;
        switch (index) {
            case 0:
                this.selectedBlueprintCategory = undefined;
                this.selectedBlueprintSubcategory = undefined;
                break;

            case 1:
                this.selectedBlueprintSubcategory = undefined;
                break;
        }
    }

    ngOnInit(): void {
        this.blueprintCategoriesFilter = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterBlueprintCategories(value))
        );

        this.blueprintByBlueprintCategoryService.getBlueprintsByBlueprintCategory().subscribe(blueprintCategories => {
            Object.assign(this.blueprintCategories, blueprintCategories)
        })
    }

    private _filterSubcategories(blueprintSubcategories: BlueprintSubCategory[], value: string): BlueprintSubCategory[] {
        const filterValue = value.toLowerCase();
        return blueprintSubcategories.filter(option => option.name.toLowerCase().includes(filterValue))
    }

    private _filterBlueprintCategories(value: string): BlueprintCategory[] {
        if (value) {
            return this.blueprintCategories
                .map(blueprintCategory => ({
                    ID: blueprintCategory.ID,
                    name: blueprintCategory.name,
                    description: blueprintCategory.description,
                    subcategories: this._filterSubcategories(blueprintCategory.subcategories, value)
                }))
                .filter(capability => capability.subcategories.length > 0);
        }

        return this.blueprintCategories;
    }

    blueprintCategoryClicked(blueprintCategory: BlueprintCategory) {
        this.selectedBlueprintCategory = blueprintCategory;
        this.setStep(1);
    }

    blueprintSubCategoryClicked(blueprintSubcategory: BlueprintSubCategory) {
        this.selectedBlueprintSubcategory = blueprintSubcategory;
        this.setStep(2);
    }
}