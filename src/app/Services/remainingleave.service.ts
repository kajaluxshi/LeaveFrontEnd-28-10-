import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Remainingleave } from '../Models/remainingleave';

const httpOption={
  header:new HttpHeaders({'Content.Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RemainingleaveService {

  constructor(private httpObj:HttpClient) {}

    private leaveRequestURL='http://localhost:8080/user';

    getRemainingDaysById(){
      return this.httpObj.get<[Remainingleave]>(this.leaveRequestURL);
    }
    

}
