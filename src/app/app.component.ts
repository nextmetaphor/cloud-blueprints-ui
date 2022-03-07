import {Component} from '@angular/core';
import {Provider,  TaxonomyService} from "./taxonomy.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'cloud-blueprints-ui';

    taxonomy: Provider[] = [];

    constructor(private taxonomyService: TaxonomyService) {
    }

    ngOnInit() {
        this.taxonomyService.getTaxonomy().subscribe(sr => {
            Object.assign(this.taxonomy, sr);
            console.log(this.taxonomy);
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