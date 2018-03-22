import { Component } from '@angular/core';

import { WU_Autocomplete_Result } from '../models/autocomplete/autocompleteresult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  curLocation: WU_Autocomplete_Result;
}
