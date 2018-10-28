import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { Role } from '../Models/role';
import { RoleService } from '../Services/role.service';
import { Department } from '../Models/department';
import { DepartmentService } from '../Services/department.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userObj: User = new User();
  user: User[];
  userEditObj: User = new User();

  roles:Role[];
  departments: Department[];

  constructor(private userService: UserService, 
    private roleservice: RoleService,
    private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getAllUserList();
    this.getAllRoleList();
    this.getAllDepartmentList();
  }

  clearUserFunction(){
    this.userObj.firstName=null;
    this.userObj.lastName=null;
    this.userObj.userName=null;
    this.userObj.roleId=null;
    this.userObj.departmentId=null;
    this.userObj.joinDate=null;
    this.userObj.email=null;
    this.userObj.password=null;
    this.userObj.servicePeriod=null;


  }
  
  getAllUserList() {
    this.userService.getAllUser().subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

  addUser() {
    this.userObj.joinDate=new Date(this.userObj.joinDate)
    this.userService.postUser(this.userObj).subscribe(addusr => {
      console.log(addusr);
      this.getAllUserList();
    });
    this.clearUserFunction();
  }

  deleteUserById(deluser) {
    this.userService.deleteUser(deluser).subscribe(data => {
      this.userObj.id = deluser.id;
      // alert("User deleted");
      this.getAllUserList();
    });
    this.clearUserFunction();
  }

  editStatus(usr) {
    this.userEditObj = Object.assign({}, usr);
  }

  updateUserById() {
    this.userService.updateUser(this.userEditObj).subscribe(data => {
      // alert("User updated"); 
      this.getAllUserList();
    });
    this.clearUserFunction();
  }

  getAllRoleList() {
    this.roleservice.getAllRole().subscribe(data => {
      this.roles = data;
      console.log(data);
    });
  }

  getAllDepartmentList() {
    this.departmentService.getAllDepartment().subscribe(data => {
      this.departments = data;
      console.log(data);
    });
  }
}
