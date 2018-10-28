import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from '../Models/role';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpObj: HttpClient) { }
  private roleUrl = "http://localhost:8080/role";

  getAllRole() {
    return this.httpObj.get<Role[]>(this.roleUrl);
  }
  createRole(data) {
    return this.httpObj.post<Role>(this.roleUrl, data);
  }
  deleteRole(roles) {
    return this.httpObj.delete(this.roleUrl + "/" + roles.id);
  }
  updateRoleType(roles) {
    return this.httpObj.put<Role>(this.roleUrl + "/" + roles.id, roles);
  }
}
