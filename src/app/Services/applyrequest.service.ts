import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Applyrequest } from '../Models/applyrequest';

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

  
}
