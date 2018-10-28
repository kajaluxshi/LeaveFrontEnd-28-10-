import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private loginCredential = new BehaviorSubject<any>(null);

  private isLogedin = new Subject<boolean>();

  isLogedin$ = this.isLogedin.asObservable();

  loginCredential$ = this.loginCredential.asObservable();
  constructor() { }

  sendLoginCreditial(data) {
    this.loginCredential.next(data);
  }

  sendLogedInValue(value) {
    this.isLogedin.next(value);
  }
}
