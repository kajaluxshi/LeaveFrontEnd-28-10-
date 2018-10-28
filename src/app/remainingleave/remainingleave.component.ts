import { Component, OnInit } from '@angular/core';
import { RemainingleaveService } from '../Services/remainingleave.service';
import { Remainingleave } from '../Models/remainingleave';

@Component({
  selector: 'app-remainingleave',
  templateUrl: './remainingleave.component.html',
  styleUrls: ['./remainingleave.component.css']
})
export class RemainingleaveComponent implements OnInit {

  remainingDays:Remainingleave[];
  constructor( private remainingleaveService:RemainingleaveService) {}

  ngOnInit() {
  }

  
}
