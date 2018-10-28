import { Component, OnInit } from '@angular/core';
import { ApplyrequestService } from '../Services/applyrequest.service';
import { Applyrequest } from '../Models/applyrequest';
import { LeavetypeService } from '../Services/leavetype.service';
import { Leavetype } from '../Models/leavetype';
import { RemainingleaveService } from '../Services/remainingleave.service';

import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { InteractionService } from '../UIService/interaction.service';

@Component({
  selector: 'app-applyrequest',
  templateUrl: './applyrequest.component.html',
  styleUrls: ['./applyrequest.component.css']
})
export class ApplyrequestComponent implements OnInit {
  leaveTypeArr: Leavetype[];
  applyLeaveRequest: Applyrequest[];
  leaveRequestObj = new Applyrequest();
  userId: number;
  leaveTypeId: number;



  constructor(
    private applyrequestService: ApplyrequestService,
    private leavetypeService: LeavetypeService,
    private remainingleaveService: RemainingleaveService,
    private loginService: LoginService,
    private intretionService:InteractionService) { }

  ngOnInit() {
    this.intretionService.loginCredential$.subscribe(data => {
      this.userId = data.userId;
    });
    this.getAllLeaveRequest();
    this.getLeaveTypes();
  }


  leaveRequestForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    leaveType: new FormControl(''),
    reason: new FormControl('')
  });


  getAllLeaveRequest() {
    this.applyrequestService.getAllLeaveRequest().subscribe(leavetypeDetails => {
      console.log(leavetypeDetails);
      this.applyLeaveRequest = leavetypeDetails;
    });
  }


  getLeaveTypes() {
    this.leavetypeService.getAllLeaveType().subscribe(leavetypeDetails => {
      console.log(leavetypeDetails);
      this.leaveTypeArr = leavetypeDetails;
    });
  }

  onSubmit() {

    var startDate = new Date(this.leaveRequestForm.value.startDate);
    var endDate = new Date(this.leaveRequestForm.value.endDate);

    var ld = endDate.getTime() - startDate.getTime();
    var days = ld / (1000 * 60 * 60 * 24) + 1;


    this.leaveRequestObj.leaveDays = days;
    this.leaveRequestObj.leaveTypeId = this.leaveRequestForm.value.leaveType;
    this.leaveRequestObj.reason = this.leaveRequestForm.value.reason;
    this.leaveRequestObj.startDate = this.leaveRequestForm.value.startDate;
    this.leaveRequestObj.endDate = this.leaveRequestForm.value.endDate;
    this.leaveRequestObj.statusId = 1;
    this.leaveRequestObj.userId = this.userId;
    
    this.applyrequestService.addLeaveRequests(this.leaveRequestObj).subscribe(msg => {
      this.clearFields();
      this.getAllLeaveRequest();
    });
  }

  clearFields() {
    this.leaveRequestForm.patchValue({ reason: "" });
    this.leaveRequestForm.patchValue({ leaveType: "Select Leave Type" });
    this.leaveRequestForm.patchValue({ startDate: "" });
    this.leaveRequestForm.patchValue({ endDate: "" });
    this.leaveRequestForm.patchValue({ remainingDays: "" });
  }
}
