import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../UIService/interaction.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userNameParent: string;
  constructor(private interaction: InteractionService) { }

  ngOnInit() {
    this.interaction.loginCredential$.subscribe(data => {
      // this.userNameParent = data.userName;
      console.log("test");
      if (data != null) {
        console.log(data);
        this.userNameParent = data.userName;
      }

    });
  }

}
