import {Component, ElementRef, ViewChild} from '@angular/core';
import {
  ArchitecturalFramework, BestPractice,
  BestPracticeArea,
  BestPracticeAreaGroup,
  BlueprintByArchitectureFrameworkService,
  FrameworkPillar
} from "../../service/blueprint-by-architecture-framework/blueprint-by-architecture-framework.service";
import {Observable, startWith} from "rxjs";
import {
  Blueprint,
  BlueprintType
} from "../../service/blueprint-by-blueprint-category/blueprint-by-blueprint-category.service";
import {FormBuilder, FormControl} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {map} from "rxjs/operators";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {BlueprintTypeService} from "../../service/blueprint-type/blueprint-type.service";

@Component({
  selector: 'app-blueprint-by-architecture-framework',
  templateUrl: './blueprint-by-architecture-framework.component.html',
  styleUrls: ['./blueprint-by-architecture-framework.component.css']
})
export class BlueprintByArchitectureFrameworkComponent {
  frameworks: ArchitecturalFramework[] = [];
  frameworksFilters?: Observable<ArchitecturalFramework[]>;

  selectedFramework?: ArchitecturalFramework;
  selectedPillar?: FrameworkPillar;
  selectedBestPracticeArea?: BestPracticeArea;
  selectedBestPracticeAreaGroup?: BestPracticeAreaGroup;
  selectedBestPractice?: BestPractice;
  selectedBlueprint?: Blueprint;

  step = 0;

  sanitizer: DomSanitizer;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  allBlueprintTypes: BlueprintType[] = [];
  filteredBlueprintTypes: Observable<BlueprintType[]>;
  selectedBlueprintTypes: BlueprintType[] = [];
  blueprintTypeCtrl = new FormControl('');

  @ViewChild('blueprintTypeInput') blueprintTypeInput?: ElementRef<HTMLInputElement>;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      // TODO
      // console.log(value)
      // this.selectedBlueprintTypes.push("cat");
    }

    // Clear the input value
    event.chipInput!.clear();

    this.blueprintTypeCtrl.setValue(null);
  }

  remove(blueprintType: BlueprintType): void {
    const index = this.selectedBlueprintTypes.indexOf(blueprintType);

    if (index >= 0) {
      this.selectedBlueprintTypes.splice(index, 1);
    }

    console.log(this.selectedBlueprintTypes)
  }

  blueprintTypeSelected(event: MatAutocompleteSelectedEvent): void {
    this.selectedBlueprintTypes.push(event.option.value);
    this.blueprintTypeInput!.nativeElement.value = '';
    this.blueprintTypeCtrl.setValue(null);

    console.log(this.selectedBlueprintTypes)
  }

  private _filterBlueprintTypes(value: string): BlueprintType[] {
    // TODO - this is not working properly - fix
    const filterValue = value.toLowerCase();

    return this.allBlueprintTypes.filter(blueprintType => blueprintType.name.toLowerCase().includes(filterValue));
  }

  constructor(private _formBuilder: FormBuilder, private blueprintByArchitectureFrameworkService: BlueprintByArchitectureFrameworkService, private blueprintTypeService: BlueprintTypeService, private domSanitizer: DomSanitizer) {
    this.sanitizer = domSanitizer;

    this.filteredBlueprintTypes = this.blueprintTypeCtrl.valueChanges.pipe(
        startWith(null),
        map((blueprintType: string | null) => (blueprintType ? this._filterBlueprintTypes(blueprintType) : this.allBlueprintTypes.slice())),
    );
  }

  setStep(index: number) {
    this.step = index;
    switch (index) {
      case 0:
        this.selectedFramework = undefined;
        this.selectedPillar = undefined;
        this.selectedBestPracticeArea = undefined;
        this.selectedBestPracticeAreaGroup = undefined;
        this.selectedBestPractice = undefined;
        this.selectedBlueprint = undefined;
        break;

      case 1:
        this.selectedPillar = undefined;
        this.selectedBestPracticeArea = undefined;
        this.selectedBestPracticeAreaGroup = undefined;
        this.selectedBestPractice = undefined;
        this.selectedBlueprint = undefined;
        break;

      case 2:
        this.selectedBestPracticeArea = undefined;
        this.selectedBestPracticeAreaGroup = undefined;
        this.selectedBestPractice = undefined;
        this.selectedBlueprint = undefined;
        break;

      case 3:
        this.selectedBestPracticeAreaGroup = undefined;
        this.selectedBestPractice = undefined;
        this.selectedBlueprint = undefined;
        break;

      case 4:
        this.selectedBestPractice = undefined;
        this.selectedBlueprint = undefined;
        break;

      case 5:
        this.selectedBlueprint = undefined;
        break;
    }
  }

  ngOnInit(): void {
    this.frameworksFilters = this.blueprintTypeCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterFrameworks(''))
    )

    this.blueprintByArchitectureFrameworkService.getBlueprintsByArchitecturalFramework().subscribe(frameworks => {
      Object.assign(this.frameworks, frameworks)
    });

    this.blueprintTypeService.getBlueprintTypes().subscribe(blueprintTypes => {
      Object.assign(this.allBlueprintTypes, blueprintTypes)
    })
  }


  private _filterFrameworks(value: string) {
    if (this.selectedBlueprintTypes.length > 0) {
      return this.frameworks
          .map(framework => ({
            ID: framework.ID,
            name: framework.name,
            link: framework.link,
            description: framework.description,
            pillars: []
            // pillars: this._filterSubcategories(framework.pillars, value)
          }))
          .filter(framework => framework.pillars.length > 0);
    } else {
      return this.frameworks;
    }
  }

  frameworkClicked(framework: ArchitecturalFramework) {
    this.selectedFramework = framework;
    this.setStep(1);
  }

  pillarClicked(pillar: FrameworkPillar) {
    this.selectedPillar = pillar;
    this.setStep(2);
  }

  bestPracticeAreaClicked(bestPracticeArea: BestPracticeArea) {
    this.selectedBestPracticeArea = bestPracticeArea;
    this.setStep(3);
  }

  bestPracticeAreaGroupClicked(bestPracticeAreaGroup: BestPracticeAreaGroup) {
    this.selectedBestPracticeAreaGroup = bestPracticeAreaGroup;
    this.setStep(4);
  }

  bestPracticeClicked(bestPractice: BestPractice) {
    this.selectedBestPractice = bestPractice;
    this.setStep(5);
  }
}
