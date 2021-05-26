import { Component } from '@angular/core';
import {Router}from '@angular/router'
import {logInComponent} from '../logIn.component'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class navbarComponent {
  hide:boolean=false
  constructor(private router:Router){}

  onClick():void{
  const a=new logInComponent(this.router)
  this.hide=a.hide
  alert(this.hide)
  }
}
