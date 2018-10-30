import { Component, OnInit } from '@angular/core';
import { ApplyrequestService } from 'src/app/Services/applyrequest.service';
import { Applyrequest } from 'src/app/Models/applyrequest';
import { InteractionService } from 'src/app/UIService/interaction.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {
  applyLeaveRequest: Applyrequest[];
  userName:String;
  constructor(
    private applyrequestService: ApplyrequestService,
    private intretionService:InteractionService
  ) { }

  ngOnInit() {
    this.intretionService.loginCredential$.subscribe(data => {
      this.userName = data.userName;
    });

    this.getAllLeaveRequest();
  }

  getAllLeaveRequest() {
    this.applyrequestService.getAllLeaveRequest().subscribe(leavetypeDetails => {
      console.log(leavetypeDetails);
      this.applyLeaveRequest = leavetypeDetails;
    });
  }
}
