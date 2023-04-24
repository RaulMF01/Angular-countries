import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styles: [
  ]
})
export class ByCountriePageComponent {

  @Input()
  public countries: Country[] = [];

  constructor( private scountries: CountriesService ){}

  searchByCountrie(term :string){
    this.scountries.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries;
    });
  }

}
