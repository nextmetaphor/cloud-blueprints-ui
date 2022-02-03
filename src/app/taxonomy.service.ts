import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TaxonomyService {

    constructor(private http: HttpClient) {
    }

    getTaxonomy() {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.get('./assets/data/ServiceByProvider.json', {headers});
    }
}
