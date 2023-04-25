import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit, OnDestroy {

  public countries : Country[]=[];
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania']; 
  public selectedRegion?: Region;

  constructor(private scountries : CountriesService){}

  
  ngOnInit(): void {
    this.selectedRegion = this.scountries.cacheStore.byRegion.region;
    this.countries = this.scountries.cacheStore.byRegion.countries;
  }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  searchByRegion(region : Region ){

    this.selectedRegion = region;
    this.scountries.searchRegion(region)
    .subscribe( countries => {
      this.countries= countries;
    });
  }

}
