import { Component } from '@angular/core';
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
  BlueprintByBlueprintCategoryService,
  BlueprintCategory
} from "../../service/blueprint-by-blueprint-category/blueprint-by-blueprint-category.service";
import {FormBuilder, FormControl} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {map} from "rxjs/operators";

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

  myControl = new FormControl();

  sanitizer: DomSanitizer;

  constructor(private _formBuilder: FormBuilder, private blueprintByArchitectureFrameworkService: BlueprintByArchitectureFrameworkService, private domSanitizer: DomSanitizer) {
    this.sanitizer = domSanitizer;
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
    this.frameworksFilters = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterFrameworks(value))
    );

    this.blueprintByArchitectureFrameworkService.getBlueprintsByArchitecturalFramework().subscribe(frameworks => {
      Object.assign(this.frameworks, frameworks)
    })
  }

  private _filterFrameworks(value: string): ArchitecturalFramework[] {
    if (value) {
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
    }

    return this.frameworks;
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
