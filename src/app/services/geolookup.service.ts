import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { WU_GeoLookup } from '../models/geolookup/geolookup';

@Injectable()
export class GeolookupService {

  constructor(private http: HttpClient) { }

  geolookupAuto(): Observable<WU_GeoLookup> {
    var url = `${environment.weatherApi}/geolookup/q/autoip.json`;
    return this.geolookup(url);
  }

  geolookupFromZip(zip: string): Observable<WU_GeoLookup> {
    var url = `${environment.weatherApi}/geolookup/q/${zip}.json`;
    return this.geolookup(url);
  }

  geolookupFromCityState(city: string, state: string): Observable<WU_GeoLookup> {
    city = city.replace(/ /gi, "_");
    var url = `${environment.weatherApi}/geolookup/q/${state}/${city}.json`;
    return this.geolookup(url);
  }

  private geolookup(url: string): Observable<WU_GeoLookup> {
    return this.http.get<WU_GeoLookup>(url);
  }

}
