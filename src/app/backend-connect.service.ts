import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BackendConnectService {
  hide=true

  constructor(private http:HttpClient) { }

  onLogin(){
  this.hide=true
 
  }

  fetch():any{
  
   return  this.http.get('http://localhost:3000/get-all-records')

  }

  delete(id){
  this.http.delete(`delete-one-record/:${id}`)
  }

  post(data){
    this.http.post("http://localhost:3000/update-existing-record",data).subscribe()
  }

  // delete(){
  //   this.http.delete('delete-one-record/:recId')
  // }

  // update(id){

  // }
}
