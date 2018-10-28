import { Component, OnInit } from '@angular/core';
import { Login } from '../Models/login';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { InteractionService } from '../UIService/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: Login = new Login();
  logedUser: any;
  constructor(private loginService: LoginService, private router: Router, private interaction:InteractionService) { }

  ngOnInit() {

    // this.loginService.loginCredential$.subscribe(data => {
    //   if (data != null) {
    //     this.router.navigate(["/admin"]);
    //   }
    // });
    // this.getLoginAuth();

  }

  getLoginAuth() {
    this.loginService.getLoginAuth(this.login).subscribe(data => {
      if(data!= null){
        
         this.interaction.sendLoginCreditial(data);
         this.interaction.sendLogedInValue(true);
         this.router.navigate(["/admin"]);
         console.log(data);
        }
        
    });
  }

}
