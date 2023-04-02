import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Provider, ServiceConfiguration, SubCategory} from "../service-configuration-by-provider.service";

export interface BlueprintCategory {
  ID: string;
  name: string;
  description: string;
  subcategories: BlueprintSubCategory[];
}

export interface BlueprintSubCategory {
  ID: string;
  name: string;
  description: string;
  blueprint: Blueprint[];
}

export interface Blueprint {
  ID: string;
  name: string;
  description: string;
  link: string;
  serviceConfigurations: ServiceConfiguration[];
}

@Injectable({
  providedIn: 'root'
})
export class BlueprintByBlueprintCategoryService {

  constructor(private http: HttpClient) {
  }

  getBlueprintsByBlueprintCategory() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<Provider[]>('https://nextmetaphor.gitlab.io/cloud-blueprints/BlueprintByCategoryJSON.json', {headers});
  }
}
