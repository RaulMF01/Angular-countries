import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries.routing.module';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountriePageComponent } from './pages/by-countrie-page/by-countrie-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountriePageComponent } from './pages/countrie-page/countrie-page.component';
import { SharedModule } from '../shared/shared.module';
import { CountrieTableComponent } from './components/countrie-table/countrie-table.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountriePageComponent,
    ByRegionPageComponent,
    CountriePageComponent,
    CountrieTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
