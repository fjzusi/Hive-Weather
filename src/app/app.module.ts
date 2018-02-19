import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AlmanacService, AstronomyService, AutocompleteService, ConditionsService, ForecastService, GeolookupService } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AlmanacService,
    AstronomyService,
    AutocompleteService,
    ConditionsService,
    ForecastService,
    GeolookupService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
