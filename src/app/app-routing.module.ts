import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from './Components/role/role.component';
import { DepartmentComponent } from './Components/department/department.component';
import { StatusComponent } from './Components/status/status.component';
import { UserComponent } from './user/user.component';
import { LeavetypeComponent } from './Components/leavetype/leavetype.component';

import { ApplyrequestComponent } from './applyrequest/applyrequest.component';

import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'rolename', component:RoleComponent},
  {path: 'department', component:DepartmentComponent},
  {path: 'status', component:StatusComponent},
  {path: 'user', component:UserComponent},
  {path: 'leaveType', component:LeavetypeComponent},
  {path: 'applyLeaveRequest', component:ApplyrequestComponent},

  {path: 'admin', component:AdminComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  UserComponent
  ];
