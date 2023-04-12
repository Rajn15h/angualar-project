import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string='https://jsonplaceholder.cypress.io/';
  constructor(private http:HttpClient) { }

  listusers(){
    return this.http.get(this.baseUrl+'users');
  }

  viewusers(id:string){
    return this.http.get(this.baseUrl+'users/'+id);
  }

  addUser(userObj:any){
    return this.http.post(this.baseUrl+'users',userObj)
  }

  deleteUser(id:any){
    return this.http.delete(this.baseUrl+'users/'+id)
  }
}
