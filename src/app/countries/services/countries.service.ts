import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheSotre } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiURl : string = 'https://restcountries.com/v3.1/';

    public cacheStore: CacheSotre = {
        byCapital:  { term: '', countries: []},
        byCountries:{ term: '', countries: []},
        byRegion:   { region: '', countries: [] },
    }

    constructor(private http: HttpClient) { 
        this.loadToLocalStorage();
    }

    private saveToLocalStorage(){
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
    }

    private loadToLocalStorage(){
        if(!localStorage.getItem('cacheStore')) return;

        this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
    }

    private getCountriesRequest(url :string): Observable<Country []>{
        return this.http.get<Country[]>(url)
        .pipe(
          catchError( () => of([])),
        //   delay( 2000 ),
        );
    }

    searchCountrybyAlfaCode(code:string) : Observable<Country | null> {
        const url = `${this.apiURl}/alpha/${code}`;
        return this.http.get<Country[]>(url)
        .pipe(
            map( countries => countries.length > 0 ? countries[0] : null),
            catchError( () =>  of(null))
        );
    }

    searchCapital( queryString:string ): Observable<Country[]>{
        const url = `${this.apiURl}/capital/${queryString}`;
        return this.getCountriesRequest(url)
        .pipe(
            tap( countries => this.cacheStore.byCapital = {term: queryString, countries:countries }),
            tap( () => this.saveToLocalStorage() )
        );
        // return this.http.get<Country[]>(url)
        // .pipe(
        //     // tap( countries => console.log('paso por el tap',countries)),
        //     // map( countries => []),
        //     // tap( countries => console.log('Tap2',countries) )
        //     catchError( error => {
        //         return of([]) 
        //     })
        // );
    }

    
    searchCountry( country:string ): Observable<Country[]>{
        const url = `${this.apiURl}/name/${country}`;
        return this.getCountriesRequest(url)
        .pipe(
            tap( countries => this.cacheStore.byCountries = {term: country, countries:countries }),
            tap( () => this.saveToLocalStorage() )
        );
       
    }

    
    searchRegion( region:Region ): Observable<Country[]>{
        const url = `${this.apiURl}/region/${region}`;
        return this.getCountriesRequest(url)
        .pipe(
            tap( countries => this.cacheStore.byRegion = { region, countries:countries }),
            tap( () => this.saveToLocalStorage() )
        );
    }
    
}