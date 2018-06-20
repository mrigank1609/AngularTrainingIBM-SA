import {Component} from '@angular/core'

@Component({
    template:`
        <h1>Welcome Works!</h1>
        <a href="/Home">''</a><br>
        <a href="/batman">Batman</a><br>
        <a href="/superman">Superman</a><br>
        <a href="/ironman">Ironman</a><br>
        <a href="/joker">Joker</a><br>
        <hr>
        <a routerLink="">Home</a><br>
        <a routerLink="/batman">Batman</a><br>
        <a routerLink="/superman">Superman</a><br>
        <a routerLink="/superman/10">Superman</a><br>
        <a routerLink="/ironman">Ironman</a><br>
        <a routerLink="/joker">Joker</a>
    `
})

export class WelcomeComponent{
    
}