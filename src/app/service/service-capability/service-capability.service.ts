import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Provider, Service} from "../service-configuration-by-provider.service";

export interface Subcategory {
  ID: string;
  name: string;
  description: string;
}

export interface Category {
  ID: string;
  name: string;
  description: string;
  subcategories: Subcategory[];
}

export interface Capability {
  ID: string;
  name: string;
  description: string;
  categories: Category[];
}


@Injectable({
  providedIn: 'root'
})
export class ServiceCapabilityService {

  constructor(private http: HttpClient) {
  }

  getCapabilities() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<Capability[]>('https://nextmetaphor.gitlab.io/cloud-taxonomy/ServiceCapabilityJSON.json', {headers});
  }
}
