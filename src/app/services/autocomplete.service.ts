import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { WU_Autocomplete } from '../models/autocomplete/autocompleteresponse';

@Injectable()
export class AutocompleteService {

  constructor(private http: HttpClient) { }

  autocomplete(query: string): Observable<WU_Autocomplete> {
    var url = `${environment.autoCompleteApi}/aq?query=${query}`;
    return this.http.get<WU_Autocomplete>(url);
  }

}
