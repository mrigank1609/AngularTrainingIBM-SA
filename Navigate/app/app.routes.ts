import {Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component'
import {BatmanComponent} from './batman/batman.component'
import {SupermanComponent} from './superman/superman.component'
import {IronmanComponent} from './ironman/ironman.component'

export let heroAppRoutes:Routes = [
    { path : '', component : WelcomeComponent},
    { path : 'batman', component : BatmanComponent},
    { path : 'superman', component : SupermanComponent},
    { path : 'superman/:args', component : SupermanComponent},
    { path : 'ironman', component : IronmanComponent},
    { path : '**', redirectTo : '',pathMatch:'full'}
]
