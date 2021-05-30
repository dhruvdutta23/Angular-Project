import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { logInComponent } from './logIn.component';
import {dashBoardComponent} from './dashboard/dashboard.component';
import {navbarComponent} from './navbar/navbar.component'
import {addRecordComponent}from './addRecord/addRecord.component'

@NgModule({
  declarations: [
    AppComponent,
    logInComponent,
    dashBoardComponent,
    navbarComponent,
    addRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
