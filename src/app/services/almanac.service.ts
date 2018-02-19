import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { WU_Almanac_Response } from '../models/almanac/almanacresponse';

@Injectable()
export class AlmanacService {

  constructor(private http: HttpClient) { }

  almanacFromLink(link: string): Observable<WU_Almanac_Response> {
    var url = `${environment.weatherApi}/almanac${link}.json`;

    return this.getAlmanac(url);
  }

  almanacFromCityState(city: string, state: string): Observable<WU_Almanac_Response> {
    city = city.replace(/ /gi, "_");
    var url = `${environment.weatherApi}/almanac/q/${state}/${city}.json`;

    return this.getAlmanac(url);
  }

  private getAlmanac(url: string): Observable<WU_Almanac_Response> {
    return this.http.get<WU_Almanac_Response>(url);
  }

}
