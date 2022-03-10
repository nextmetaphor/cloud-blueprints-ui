import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';

import {HttpClientModule} from '@angular/common/http';
import {ServiceConfigurationByProviderService} from "./service/service-configuration-by-provider.service";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ServiceConfigurationByProviderComponent} from './component/service-configuration-by-provider/service-configuration-by-provider.component';
import {RouterModule, Routes} from "@angular/router";
import {MatRippleModule} from "@angular/material/core";

const appRoutes: Routes = [
    {path: 'service-configuration-by-provider', component: ServiceConfigurationByProviderComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        ServiceConfigurationByProviderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        HttpClientModule,
        MatExpansionModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        MatRippleModule,
    ],
    providers: [ServiceConfigurationByProviderService],
    bootstrap: [AppComponent]
})


export class AppModule {
}
