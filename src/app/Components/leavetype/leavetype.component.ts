import { Component, OnInit } from '@angular/core';
import { Leavetype } from 'src/app/Models/leavetype';
import { LeavetypeService } from 'src/app/Services/leavetype.service';

@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrls: ['./leavetype.component.css']
})
export class LeavetypeComponent implements OnInit {
LeavetypeObj:Leavetype=new Leavetype();
leaveTypeArr:Leavetype[];
  constructor(private leavetypeService:LeavetypeService) { }

  ngOnInit() {
    this.getAllLeaveTypes();
  }

  getAllLeaveTypes(){
    this.leavetypeService.getAllLeaveType().subscribe(leavetypeDetails=>{
      console.log(leavetypeDetails);
      this.leaveTypeArr=leavetypeDetails;
    });
  }

  addLeaveTypes(){
    this.leavetypeService.CreateLeaveTypes(this.LeavetypeObj).subscribe(leavetypeDetails=>{
      // alert("Leave Type Added");
      console.log(leavetypeDetails);
      this.getAllLeaveTypes();
    });
  }

  deleteLeaveTypes(leaveType){
    this.leavetypeService.deleteLeaveTypes(leaveType).subscribe(leavetypeDetails=>{
      this.LeavetypeObj.id=leaveType.id;
      // alert("LeaveTypeDeleted");
      this.getAllLeaveTypes();
    });
  }

  editLeaveType(leaveType){
    this.LeavetypeObj = Object.assign({}, leaveType)
  }

  updateLeaveType() {
    this.leavetypeService.updateLeaveTypes(this.LeavetypeObj).subscribe(cde => {
      // alert("LeaveType updated");
      this.getAllLeaveTypes();
    });
  }
}
