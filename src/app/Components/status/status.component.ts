import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/Models/status';
import { StatusService } from 'src/app/Services/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusObj:Status=new Status();
  status:Status[];
  editstatusObj: Status = new Status();

  constructor(private statusService:StatusService) { }

  ngOnInit() {
    this.getStatus();
  }

  clearFunction(){
    this.statusObj.status=null;
  }

  getStatus(){
    this.statusService.getAllStatus().subscribe(data=>{
      this.status=data;
      console.log(data);
    });
  }

  addStatus(){
    this.statusService.postStatus(this.statusObj).subscribe(data=>{
      //alert("Added Your Status");
      console.log(data);
      this.getStatus()
    });
    this.clearFunction()
  }

  deleteStatusById(dataStatus){
    this.statusService.deleteStatus(dataStatus).subscribe(data=>{
      this.statusObj.id=dataStatus.id;
    //  alert("Deleted your Status");
      this.getStatus();
    });
  }

  editStatus(stus) {
    this.editstatusObj = Object.assign({}, stus);
  }

  updateStatusById() {
    this.statusService.updateStatus(this.editstatusObj).subscribe(data => {
      alert("Status updated");
      this.getStatus();
    });
  }

}
