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
        {title: 'service configurations', link: '/service-configuration-by-provider'},
        {title: 'blueprints', link: ''},
    ];

    constructor() {
    }

    ngOnInit() {
    }
}