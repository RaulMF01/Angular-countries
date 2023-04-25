import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styles: [
  ]
})
export class ByCountriePageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue: string = '';

  constructor( private scountries: CountriesService ){}
  
  ngOnInit(): void {
    this.countries = this.scountries.cacheStore.byCountries.countries;
    this.initialValue = this.scountries.cacheStore.byCountries.term;
  }

  searchByCountrie(term :string){
    this.scountries.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries;
    });
  }

}
