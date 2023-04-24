import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountriePageComponent } from './pages/by-countrie-page/by-countrie-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountriePageComponent } from './pages/countrie-page/countrie-page.component';

const routes: Routes =[
    {
        path:'by-capital',
        component: ByCapitalPageComponent
    },
    {
        path:'by-country',
        component: ByCountriePageComponent
    },
    {
        path:'by-region',
        component: ByRegionPageComponent
    },
    {
        path:'by/:id',
        component:CountriePageComponent
    },
    {
        path:'**',
        redirectTo: 'by-capital'
    },
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class CountriesRoutingModule{}