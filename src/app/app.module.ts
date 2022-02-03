import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';

import {HttpClientModule} from '@angular/common/http';
import {TaxonomyService} from "./taxonomy.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        HttpClientModule,
    ],
    providers: [TaxonomyService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
