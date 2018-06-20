import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Module is always imported 
//Services are declared
//
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { heroAppRoutes } from './app.routes';
import { BatmanComponent } from './batman/batman.component';
import { SupermanComponent } from './superman/superman.component';
import { IronmanComponent } from './ironman/ironman.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    BatmanComponent,
    SupermanComponent,
    IronmanComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(heroAppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
