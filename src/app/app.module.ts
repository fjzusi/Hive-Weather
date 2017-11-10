import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ConditionsService } from './services/conditions.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ConditionsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
