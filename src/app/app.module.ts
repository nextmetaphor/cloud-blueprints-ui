import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";

import {HttpClientModule} from '@angular/common/http';
import {ServiceConfigurationByProviderService} from "./service/service-configuration-by-provider.service";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from "@angular/material/divider";
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

import {MatToolbarModule} from "@angular/material/toolbar";
import {
    ServiceConfigurationByProviderComponent
} from './component/service-configuration-by-provider/service-configuration-by-provider.component';
import {RouterModule, Routes} from "@angular/router";
import {MatRippleModule} from "@angular/material/core";
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {
    ServiceByCapabilityComponent
} from './component/service-by-capability/service-by-capability.component';
import {
    BlueprintByBlueprintCategoryComponent
} from './component/blueprint-by-blueprint-category/blueprint-by-blueprint-category.component';
import { BlueprintByArchitectureFrameworkComponent } from './component/blueprint-by-architecture-framework/blueprint-by-architecture-framework.component';
import { ServiceConfigurationByCapabilityTableComponent } from './component/service-configuration-by-capability-table/service-configuration-by-capability-table.component';
import { MarkdownModule } from 'ngx-markdown';

const appRoutes: Routes = [
    {path: 'service-configuration-by-provider', component: ServiceConfigurationByProviderComponent},
    {path: 'service-configuration-by-capability', component: ServiceByCapabilityComponent},
    {path: 'blueprint-by-blueprint-category', component: BlueprintByBlueprintCategoryComponent},
    {path: 'blueprint-by-architecture-framework', component: BlueprintByArchitectureFrameworkComponent},
    {path: 'service-configuration-by-capability-table', component: ServiceConfigurationByCapabilityTableComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        ServiceConfigurationByProviderComponent,
        ServiceByCapabilityComponent,
        BlueprintByBlueprintCategoryComponent,
        BlueprintByArchitectureFrameworkComponent,
        ServiceConfigurationByCapabilityTableComponent
    ],
    imports: [
        MarkdownModule.forRoot(),
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
        MatChipsModule,
        MatTooltipModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
    ],
    providers: [ServiceConfigurationByProviderService],
    bootstrap: [AppComponent]
})


export class AppModule {
}
