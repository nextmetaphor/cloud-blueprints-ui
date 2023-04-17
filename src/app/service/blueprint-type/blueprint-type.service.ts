import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Capability} from "../service-capability/service-capability.service";
import {BlueprintType} from "../blueprint-by-blueprint-category/blueprint-by-blueprint-category.service";

@Injectable({
  providedIn: 'root'
})
export class BlueprintTypeService {

  constructor(private http: HttpClient) {
  }

  getBlueprintTypes() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<BlueprintType[]>('https://nextmetaphor.gitlab.io/cloud-blueprints/BlueprintTypeJSON.json', {headers});
  }
}
