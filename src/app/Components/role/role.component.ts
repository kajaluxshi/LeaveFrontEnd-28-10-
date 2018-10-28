import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/Services/role.service';
import { Role } from 'src/app/Models/role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roleObj: Role = new Role();
  role: Role[];
  constructor(private roleservice: RoleService) { }

  ngOnInit() {
    this.getRole();
  }
  getRole() {
    this.roleservice.getAllRole().subscribe(xyz => {
      console.log(xyz);
      this.role = xyz;
    });
  }
  addRole() {
    this.roleservice.createRole(this.roleObj).subscribe(data => {
     // alert("Role Added Sucessfully");
      this.getRole();
    });
  }
  //Assign to datas in Delete Model and Edit Model
  editRole(role) {
    console.log(role);
    this.roleObj = Object.assign({}, role);
  }
  deleteRoleById(role) {
    console.log(role);
    this.roleservice.deleteRole(role).subscribe(data => {
      //this.roleObj.id=role.id
     //alert("Role Deleted Sucessfully");
      this.getRole();
      // console.log(leaveType);
    });
  }
  updateRoleById() {
    this.roleservice.updateRoleType(this.roleObj).subscribe(data => {
     // alert("Role Updated Sucessfully");
      this.getRole();
    });
  }
 
}
