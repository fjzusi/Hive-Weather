import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { WU_Forecast_Response } from '../models/forecast/forecastresponse';

@Injectable()
export class ForecastService {

  constructor(private http: HttpClient) { }

  forecastFromLink(link: string): Observable<WU_Forecast_Response> {
    var url = `${environment.weatherApi}/forecast${link}.json`;

    return this.getForecast(url);
  }

  forecastFromCityState(city: string, state: string): Observable<WU_Forecast_Response> {
    city = city.replace(/ /gi, "_");
    var url = `${environment.weatherApi}/forecast/q/${state}/${city}.json`;

    return this.getForecast(url);
  }

  private getForecast(url: string): Observable<WU_Forecast_Response> {
    return this.http.get<WU_Forecast_Response>(url);
  }

}
