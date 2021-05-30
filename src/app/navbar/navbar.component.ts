import { Component ,OnInit,AfterContentInit,OnChanges} from '@angular/core';
import {Router}from '@angular/router'
import{BackendConnectService}from '../backend-connect.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class navbarComponent {
  hide:boolean
  constructor(private back:BackendConnectService){
   
  }
  ngOnChanges(){
    this.hide=this.back.hide
    console.log("navbar hide is ", this.hide)
  }
 
}
