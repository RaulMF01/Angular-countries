import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countrie: Country[] = [];
  public isLoading:boolean = false;
  public initialValue: string = '';

  constructor(private scountries: CountriesService){}

  ngOnInit(): void {
    this.countrie = this.scountries.cacheStore.byCapital.countries;
    this.initialValue = this.scountries.cacheStore.byCapital.term;
  }

  searchByCapital( term :string ) {
    this.isLoading = true;
    this.scountries.searchCapital(term)
    .subscribe( obserCountries =>{
      this.countrie = obserCountries;
      this.isLoading = false;
    });
  } 
}
