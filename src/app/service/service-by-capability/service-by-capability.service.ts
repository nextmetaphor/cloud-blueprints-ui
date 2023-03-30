import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Capability} from "../service-capability/service-capability.service";

@Injectable({
    providedIn: 'root'
})
export class ServiceByCapabilityService {

    constructor(private http: HttpClient) {
    }

    getServiceByCapabilities() {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.get<Capability[]>('https://nextmetaphor.gitlab.io/cloud-taxonomy/ServiceByCapabilityJSON.json', {headers});
    }
}
