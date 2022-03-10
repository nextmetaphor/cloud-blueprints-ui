import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export interface ServiceConfiguration {
  ID: string;
  name: string;
  description: string;
  link: string;
}

export interface Service {
  ID: string;
  name: string;
  description: string;
  link: string;
  configurations: ServiceConfiguration[];
}

export interface Provider {
  ID: string;
  name: string;
  description: string;
  services: Service[];
}

@Injectable({
  providedIn: 'root'
})
export class ServiceConfigurationByProviderService {

  constructor(private http: HttpClient) {
  }

  getTaxonomy() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<Provider>('https://nextmetaphor.gitlab.io/cloud-taxonomy/ServiceByProvider.json', {headers});
  }
}
