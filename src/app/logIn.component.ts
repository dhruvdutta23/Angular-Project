import { Component ,OnInit} from '@angular/core';
import {Router}from '@angular/router'
import {BackendConnectService}from './backend-connect.service'

@Component({
  selector: 'login',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.scss']
})

export class logInComponent {

  username:string = ""
  password:string=""
  cond:boolean


  constructor(private router:Router, private back:BackendConnectService){
  }

  onClick(){
    if(this.password=='' || this.username=='')
    {
      this.cond=true

    }


    else if (this.username=="1234" && this.password=="1234"){
      //this.back.onLogin()
      this.router.navigate(['dashboard'])
      alert("log in success")
      //alert(this.hide)

    }
    else
    {
      this.username=""
      this.password=""
      alert("wrong credentials")
    }
  }
}
