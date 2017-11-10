import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { Condition } from '../models/condition';

@Injectable()
export class ConditionsService {

  constructor(private http: HttpClient) { }

  conditionsFromLink(link: string): Observable<Condition> {
    var url = `${environment.weatherApi}conditions${link}.json`;
    
    return this.getConditions(url);
  }

  conditionsFromCityState(city: string, state: string): Observable<Condition> {
    city = city.replace(/ /gi, "_");
    var url = `${environment.weatherApi}conditions/q/${state}/${city}.json`;

    return this.getConditions(url);
  }

  private getConditions(url: string): Observable<Condition> {
    return this.http.get<Condition>(url)
      .pipe(
        map(data => data.current_observation)
      );
  }

}
