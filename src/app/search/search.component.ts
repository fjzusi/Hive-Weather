import { Component, OnInit } from '@angular/core';

import { AutocompleteService } from '../services/autocomplete.service';
import { WU_Autocomplete_Result } from '../models/autocomplete/autocompleteresult';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  searchResults: Array<WU_Autocomplete_Result>;

  constructor(private autocompleteService: AutocompleteService) {
    this.searchResults = new Array<WU_Autocomplete_Result>();
  }

  ngOnInit() {
  }

}
