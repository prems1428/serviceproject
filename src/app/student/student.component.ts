import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceSampleService } from '../service-sample.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  getOutVal:any=[];
 
constructor(private studentservice:ServiceSampleService){
  this.getOutVal=this.studentservice.getVal();
  console.log(this.getOutVal,"student get"); 
 }
  
   
  
 
// public val:any ="Prems";
// colorVal:any='';
// onColor(color:string){
//   this.colorVal=color;
//   console.log("Hii");
// }
 

}






