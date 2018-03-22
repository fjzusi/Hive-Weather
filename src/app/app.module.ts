import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AlmanacService, AstronomyService, AutocompleteService, ConditionsService, ForecastService, GeolookupService } from './services';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule
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
