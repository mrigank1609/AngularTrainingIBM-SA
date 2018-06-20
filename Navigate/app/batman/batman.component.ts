import {Component} from '@angular/core'

@Component({
    template:`
        <h1>Batman Works!</h1>
        <br>
        <a [routerLink]="['/']">Home</a>
        <br>
        <a [routerLink]="['/batman']">Batman</a>
        <br>
        <a [routerLink]="['/superman']">Superman</a>
        <br>
        <a [routerLink]="['/superman','10']">Superman 10</a>
        <br>
        <a [routerLink]="['/ironman']">Ironman</a>
        <br>
        <a [routerLink]="['/joker']">Joker</a>
    `
})

export class BatmanComponent{
    
}