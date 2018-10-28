import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../Models/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  private urlLogin = 'http://localhost:8080/login';
  constructor(private http: HttpClient) { }

  public getLoginAuth(login: Login) {
    return this.http.post(this.urlLogin, login);
 
  }
}
