import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiURl : string = 'https://restcountries.com/v3.1/';

    constructor(private http: HttpClient) { }

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
        return this.http.get<Country[]>(url)
        .pipe(
            // tap( countries => console.log('paso por el tap',countries)),
            // map( countries => []),
            // tap( countries => console.log('Tap2',countries) )
            catchError( error => {
                return of([]) 
            })
        );
    }

    
    searchCountry( country:string ): Observable<Country[]>{
        const url = `${this.apiURl}/name/${country}`;
        return this.http.get<Country[]>(url)
        .pipe(
            catchError( error => {
                return of([]) 
            })
        );
    }

    
    searchRegion( region:string ): Observable<Country[]>{
        const url = `${this.apiURl}/region/${region}`;
        return this.http.get<Country[]>(url)
        .pipe(
            catchError( error => {
                return of([]) 
            })
        );
    }
    
}