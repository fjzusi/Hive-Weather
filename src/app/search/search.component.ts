import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

import { AutocompleteService } from '../services/autocomplete.service';
import { WU_Autocomplete_Result } from '../models/autocomplete/autocompleteresult';
import { WU_Autocomplete } from '../models/autocomplete/autocompleteresponse';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  model: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor (private autoCompleteService: AutocompleteService) {}

  formatMatches = (value: any) => value.name || '';

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(query =>
        this.autoCompleteService.autocomplete(query)
          .do(() => this.searchFailed = false)
          .catch((err) => {
            this.searchFailed = true;
            return of([]);
          }))
      .do(() => this.searching = false)
      .merge(this.hideSearchingWhenUnsubscribed);

    private extractSearchResults(response: WU_Autocomplete) {
      return response.RESULTS;
    }

    searchClick() {
      this.autoCompleteService.autocomplete("alabama")
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
    }
}
