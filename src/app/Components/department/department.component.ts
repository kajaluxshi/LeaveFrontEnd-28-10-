import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { Department } from 'src/app/Models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departmentDetailsobj:Department=new Department();
  departmentDetailsSave:Department[];  




  constructor(private departmentService:DepartmentService) { }

  ngOnInit() {
    this.getDepartmentDetails();
  }

  getDepartmentDetails(){
    this.departmentService.getAllDepartment().subscribe(departmetDetailsTable=>{
      this.departmentDetailsSave=departmetDetailsTable;
    });

  }

  addDepartment(){
    this.departmentService.createDepartment(this.departmentDetailsobj).subscribe(saveDepartment=>{
      this.getDepartmentDetails();
      console.log(saveDepartment);
    });
  }

  
  
  getDetailsId(departmentDetailsId){
    this.departmentDetailsobj=Object.assign({},departmentDetailsId)

  }

  deleteDepartment(DepartmentDeletDetails){
    this.departmentService.deleteDepartment(DepartmentDeletDetails).subscribe(departmentDelete=>{
      this.departmentDetailsobj.id=DepartmentDeletDetails.id;
      this.getDepartmentDetails();
      //alert("Delete Department Sucessfully");
    });

  }

  UpdateDepartmentDetails(){
    this.departmentService.editDepartmentById(this.departmentDetailsobj).subscribe(updatedDepartment=>{
    this.getDepartmentDetails();
    //alert("Updated Department Sucessfully");
    });
  }

}
