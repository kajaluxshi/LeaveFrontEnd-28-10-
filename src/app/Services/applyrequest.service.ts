import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Applyrequest } from '../Models/applyrequest';
import { LeaveRequestManage } from '../Models/leave-request-manage';

const httpOption={
  header:new HttpHeaders({'Content.Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApplyrequestService {
  constructor(private httpObj:HttpClient) { }

  private leaveRequestURL='http://localhost:8080/leaverequest';

  getAllLeaveRequest(){
    return this.httpObj.get<Applyrequest[]>(this.leaveRequestURL);
  }

  addLeaveRequests(data){
    return this.httpObj.post<Applyrequest>(this.leaveRequestURL,data);
  }

  public approvedLeaveRequest(processLeaveRequest) {
    return this.httpObj.post<LeaveRequestManage>(this.leaveRequestURL + "/leaveapprove", processLeaveRequest);
  }

  public rejectLeaveRequest(processLeaveRequest) {
    return this.httpObj.post<LeaveRequestManage>(this.leaveRequestURL + "/rejectleave", processLeaveRequest);
  }
  
}
