import { Component, OnInit } from '@angular/core';
import { InteractionService } from './UIService/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LeaveMS'
  userNameParent: string;
  isLogedIn = false;
  userRoleParent:string;

  constructor(private interaction: InteractionService) {

  }

  ngOnInit() {
    this.interaction.isLogedin$.subscribe(data => {
      if (data != null) {
        this.isLogedIn = data;
       
        //console.log(data);

        this.interaction.loginCredential$.subscribe(res=>{
          this.userNameParent=res.userName;
          this.userRoleParent=res.userRole;
          console.log(this.userNameParent);
        })
      }

    });

  
    
  }
}
