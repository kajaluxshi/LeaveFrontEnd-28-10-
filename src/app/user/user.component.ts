import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { Role } from '../Models/role';
import { Department } from '../Models/department';
import { UserService } from '../Services/user.service';
import { RoleService } from '../Services/role.service';
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

  getAllUserList() {
    this.userService.getAllUser().subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

  addUser() {
    this.userService.postUser(this.userObj).subscribe(addusr => {
      console.log(addusr);
      this.getAllUserList();
    });
  }
  deleteUserById(deluser) {
    this.userService.deleteUser(deluser).subscribe(data => {
      this.userObj.id = deluser.id;
      // alert("User deleted");
      this.getAllUserList();
    });
  }

  editStatus(usr) {
    this.userEditObj = Object.assign({}, usr);
  }

  updateUserById() {
    this.userService.updateUser(this.userEditObj).subscribe(data => {
      // alert("User updated"); 
      this.getAllUserList();
    });
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
