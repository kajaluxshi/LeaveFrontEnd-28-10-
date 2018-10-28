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
  departmentEditobj:Department=new Department();

  constructor(private departmentService:DepartmentService) { }

  ngOnInit() {
    this.getDepartmentDetails();
  }

  clearDEPFunction(){
    this.departmentDetailsobj.departmentName=null;
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
    this.clearDEPFunction();
  }

  getDetailsId(departmentDetailsId){
    this.departmentEditobj=Object.assign({},departmentDetailsId)
  }

  deleteDepartment(DepartmentDeletDetails){
    this.departmentService.deleteDepartment(DepartmentDeletDetails).subscribe(departmentDelete=>{
      this.departmentEditobj.id=DepartmentDeletDetails.id;
      this.getDepartmentDetails();
      //alert("Delete Department Sucessfully");
    });
    this.clearDEPFunction();
  }

  UpdateDepartmentDetails(){
    this.departmentService.editDepartmentById(this.departmentEditobj).subscribe(updatedDepartment=>{
    this.getDepartmentDetails();
    //alert("Updated Department Sucessfully");
    });
    this.clearDEPFunction();
  }

}
