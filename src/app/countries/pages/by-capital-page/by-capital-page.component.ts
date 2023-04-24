import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countrie: Country[] = [];

  constructor(private scountries: CountriesService){}

  searchByCapital( term :string ) {
    this.scountries.searchCapital(term)
    .subscribe( obserCountries =>{
      this.countrie = obserCountries;
    });
  } 
}
