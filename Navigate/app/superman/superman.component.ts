import {Component, OnInit} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    template:`
        <h1>SuperMan Works!</h1>
        <hr>
        <label>This is {{power}}th Superman</label>
        <hr>
        <button (click)="navfun('/')">Home</button>
        <button (click)="navfun('batman')">Batman</button>
        <button (click)="navfun('ironman')">Ironman</button>
    `
})

export class SupermanComponent implements OnInit{
    power;
    constructor(private rtr:Router,private ar:ActivatedRoute){}

    ngOnInit(){
        this.power = this.ar.snapshot.params['args']
    }
    navfun(arg){
        this.rtr.navigate([arg]);
    }
}