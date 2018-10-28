import { Component, OnInit, Input } from '@angular/core';
import { InteractionService } from 'src/app/UIService/interaction.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  @Input() userName:string;
  constructor(private interaction: InteractionService) { }

  ngOnInit() {
    // this.interaction.loginCredential$.subscribe(data => {
    //   // this.userName = data.userName;
    //   console.log(data);
    // });
  }

  logOut() {
    this.interaction.sendLogedInValue(false);
  }
}
