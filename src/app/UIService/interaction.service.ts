import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private loginCredential = new BehaviorSubject<any>(null);
  private isLogedin = new Subject<boolean>();
  private msgDataSource = new BehaviorSubject<string>(null);
  private userInfo = new BehaviorSubject<string>(null);
  private selectedUserId = new BehaviorSubject<number>(null);

  msgDataSource$ = this.msgDataSource.asObservable();
  isLogedin$ = this.isLogedin.asObservable();
  loginCredential$ = this.loginCredential.asObservable();
  userInfo$ = this.userInfo.asObservable();
  selectedUserId$ = this.selectedUserId.asObservable();


  constructor() { }

  sendLoginCreditial(data) {
    this.loginCredential.next(data);
  }

  sendLogedInValue(value) {
    this.isLogedin.next(value);
  }

  upadateMsg(msg: string) {
    this.msgDataSource.next(msg);
  }

  useUserInfo(firstName:string){
    this.userInfo.next(firstName);
  }

  useSelectedUserId(userId: number){
    this.selectedUserId.next(userId);
  }
}
