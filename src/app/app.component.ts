import {Component} from '@angular/core';
import {TaxonomyService} from "./taxonomy.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'cloud-blueprints-ui';

    taxonomy: any[] = [];

    constructor(private taxonomyService: TaxonomyService) {
    }

    ngOnInit() {
        this.taxonomyService.getTaxonomy().subscribe(sr => {
            Object.assign(this.taxonomy, sr);
        });
    }
}
