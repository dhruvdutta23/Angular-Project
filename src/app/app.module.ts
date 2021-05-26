import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { logInComponent } from './logIn.component';
import {dashBoardComponent} from './dashboard/dashboard.component';
import {navbarComponent} from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    logInComponent,
    dashBoardComponent,
    navbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
