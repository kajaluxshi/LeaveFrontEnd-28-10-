import { Component, OnInit } from '@angular/core';
import { ApplyrequestService } from 'src/app/Services/applyrequest.service';
import { InteractionService } from 'src/app/UIService/interaction.service';
import { Applyrequest } from 'src/app/Models/applyrequest';
import { LeaveRequestManage } from 'src/app/Models/leave-request-manage';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {

  applyLeaveRequest: Applyrequest[];
  userName:String;
  UserId:number;

  constructor(
    private applyrequestService: ApplyrequestService,
    private intretionService:InteractionService,
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
