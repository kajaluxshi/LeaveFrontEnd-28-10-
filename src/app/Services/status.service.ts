import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Status } from '../Models/status';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  constructor(private httpObj:HttpClient) { }
  private statusUrl="http://localhost:8080/status";

  getAllStatus(){
    return this.httpObj.get<Status[]>(this.statusUrl);
  }

  postStatus(datastatus){
    return this.httpObj.post<Status>(this.statusUrl,datastatus);
  }

  deleteStatus(datastatus){
    return this.httpObj.delete<Status>(this.statusUrl+"/"+datastatus.id,datastatus);
  }


  updateStatus(data){
    return this.httpObj.put<Status>(this.statusUrl+"/"+ data.id,data);
  }
}
