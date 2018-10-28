import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { Role } from '../Models/role';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpObj:HttpClient) { }
  usrUrl="http://localhost:8080/user";
  private roleUrl = "http://localhost:8080/role";

  getAllRole() {
    return this.httpObj.get<Role[]>(this.roleUrl);
  }

  getAllUser(){
    return this.httpObj.get<User[]>(this.usrUrl);
  }
  
  postUser(usrdata){
    return this.httpObj.post<User>(this.usrUrl,usrdata);
  }

  deleteUser(usrdata){
    return this.httpObj.delete<User>(this.usrUrl+"/"+usrdata.id,usrdata)
  }
  
  updateUser(usrdata){
    return this.httpObj.put<User>(this.usrUrl+"/"+usrdata.id,usrdata)
  }
}
