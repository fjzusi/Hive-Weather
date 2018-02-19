import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

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
    HttpClientModule,
    Ng2AutoCompleteModule
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
