import {Component} from '@angular/core';

export interface MenuItem {
    title: string,
    link: string,
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'cloud-blueprints-ui';

    menus: MenuItem[] = [
        {title: 'service by capability', link: 'service-configuration-by-capability'},
        {title: 'service by provider', link: 'service-configuration-by-provider'},
        {title: 'blueprint by category', link: 'blueprint-by-blueprint-category'},
    ];

    constructor() {
    }

    ngOnInit() {
    }
}