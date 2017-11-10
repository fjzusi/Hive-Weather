import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { WU_Condition } from '../models/condition';

@Injectable()
export class ConditionsService {

  constructor(private http: HttpClient) { }

  conditionsFromLink(link: string): Observable<WU_Condition> {
    var url = `${environment.weatherApi}conditions${link}.json`;

    return this.getConditions(url);
  }

  conditionsFromCityState(city: string, state: string): Observable<WU_Condition> {
    city = city.replace(/ /gi, "_");
    var url = `${environment.weatherApi}conditions/q/${state}/${city}.json`;

    return this.getConditions(url);
  }

  private getConditions(url: string): Observable<WU_Condition> {
    return this.http.get<WU_Condition>(url);
  }

}
