import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Leavetype } from '../Models/leavetype';

const httpOption={
  header:new HttpHeaders({'Content.Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LeavetypeService {

  constructor( private httpObj:HttpClient) { }
  private leaveTypeURL='http://localhost:8080/leavetype';

  getAllLeaveType(){
    return this.httpObj.get<Leavetype[]>(this.leaveTypeURL);
  }

  CreateLeaveTypes(data){
    return this.httpObj.post<Leavetype>(this.leaveTypeURL,data);
  }

  deleteLeaveTypes(leavetype){
    return this.httpObj.delete<Leavetype>(this.leaveTypeURL+"/"+leavetype.id,leavetype);
  }

  updateLeaveTypes(leavetype){
    return this.httpObj.put<Leavetype>(this.leaveTypeURL+"/"+leavetype.id,leavetype);
  }
}
