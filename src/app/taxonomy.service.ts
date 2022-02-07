import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export interface ServiceConfiguration {
    serviceConfigurationID: string;
    serviceConfigurationName: string;
    serviceConfigurationDescription: string;
    serviceConfigurationLink: string;
}

export interface Service {
    serviceID: string;
    serviceName: string;
    serviceDescription: string;
    serviceLink: string;
    configurations: ServiceConfiguration[];
}

export interface Provider {
    providerID: string;
    providerName: string;
    providerDescription: string;
    services: Service[];
}

@Injectable({
    providedIn: 'root'
})
export class TaxonomyService {

    constructor(private http: HttpClient) {
    }

    getTaxonomy() {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.get<Provider>('https://nextmetaphor.gitlab.io/cloud-taxonomy/ServiceByProvider.json', {headers});
    }
}
