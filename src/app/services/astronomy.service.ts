import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { WU_Astronomy } from '../models/astronomy/astronomy';

@Injectable()
export class AstronomyService {

  constructor(private http: HttpClient) { }

  astronomyFromLink(link: string): Observable<WU_Astronomy> {
    var url = `${environment.weatherApi}/astronomy${link}.json`;

    return this.getAstronomy(url);
  }

  astronomyFromCityState(city: string, state: string): Observable<WU_Astronomy> {
    city = city.replace(/ /gi, "_");
    var url = `${environment.weatherApi}/astronomy/q/${state}/${city}.json`;

    return this.getAstronomy(url);
  }

  private getAstronomy(url: string): Observable<WU_Astronomy> {
    return this.http.get<WU_Astronomy>(url);
  }

}
