import { Component, OnInit } from '@angular/core';
import { ApplyrequestService } from 'src/app/Services/applyrequest.service';
import { Applyrequest } from 'src/app/Models/applyrequest';
import { InteractionService } from 'src/app/UIService/interaction.service';
import { LeaveRequestManage } from 'src/app/Models/leave-request-manage';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {
  applyLeaveRequest: Applyrequest[];
  leaveRequestManageObj = new LeaveRequestManage();
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

  approveLeave(lvRequestId) {
    this.leaveRequestManageObj.leaveRequestId = lvRequestId;
    this.leaveRequestManageObj.processedBy = 2;
    this.leaveRequestManageObj.statusId = 2;
    this.leaveRequestManageObj.rejectreason = null;
    // console.log(this.leaveRequestManageObj);
    this.applyrequestService.approvedLeaveRequest(this.leaveRequestManageObj).subscribe(data => {
      this.intretionService.upadateMsg("success");
      this.getAllLeaveRequest();
    },
      error => {
        this.intretionService.upadateMsg("fail");
      });
  }

  rejectLeave() {
    console.log(this.leaveRequestManageObj);
    this.applyrequestService.rejectLeaveRequest(this.leaveRequestManageObj).subscribe(
      data => {
        this.intretionService.upadateMsg("success");
        this.getAllLeaveRequest();
      },
      error => {
        this.intretionService.upadateMsg("fail");
      }
    );
  }

  sendUserInfo(firstName){
    this.intretionService.useUserInfo(firstName);
  }


}
