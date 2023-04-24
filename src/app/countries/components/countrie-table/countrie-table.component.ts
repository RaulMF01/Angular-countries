import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './countrie-table.component.html',
  styles: [
    `img {
      width:25px;
    }`
  ]
})
export class CountrieTableComponent {

  @Input()
  public countries: Country[]=[];

}
