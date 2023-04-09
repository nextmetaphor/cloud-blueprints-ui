import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export interface ArchitecturalFramework {
    ID: string;
    name: string;
    description: string;
    link: string;
    pillars: FrameworkPillar[];
}

export interface FrameworkPillar {
    ID: string;
    name: string;
    description: string;
    link: string;
    areas: BestPracticeArea[];
}

export interface BestPracticeArea {
    ID: string;
    name: string;
    description: string;
    link: string;
    areaGroups: BestPracticeAreaGroup[];
}

export interface BestPracticeAreaGroup {
    ID: string;
    name: string;
    description: string;
    link: string;
}

@Injectable({
    providedIn: 'root'
})
export class BlueprintByArchitectureFrameworkService {

    constructor(private http: HttpClient) {
    }

    getBlueprintsByArchitecturalFramework() {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.get<ArchitecturalFramework[]>('https://nextmetaphor.gitlab.io/cloud-architecture-frameworks/BestPracticeByFrameworkJSON.json', {headers});
    }
}
