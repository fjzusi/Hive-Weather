import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { WU_Autocomplete } from '../models/autocomplete/autocompleteresponse';

@Injectable()
export class AutocompleteService {

  constructor(private http: HttpClient) { }

  autocomplete(query: string): Observable<WU_Autocomplete> {
    var url = `${environment.autoCompleteApi}/aq?query=${query}`;
    return this.http.jsonp<WU_Autocomplete>(url, 'cb');
  }

}
