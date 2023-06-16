import { style } from '@angular/animations';
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
  // getOutVal:any={
  //   name:any;
  //   age:any;
  //   contact:any
  // };
  getOutVal:any=[];
  // getOutVal = (Name: KeyValue<number,string>, Age: KeyValue<number,string>,Contact: KeyValue<number,string>): number => {
  //   return 0
  // }
// profileForm = FormGroup;
// this.profileForm = new FormGroup({
  //   Name : new FormControl(null, Validators.required),
  //   Age : new FormControl(null, Validators.required),
  //   Contact : new FormControl(
  //     null,
  //     [
  //       Validators.required,
  //       Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
  //     ]),
  // });
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
 
//  this.name=this.profileForm.value.Name;
//  this.age=this.profileForm.value.Age;
//  this.contact=this.profileForm.value.Contact;
// console.log(this.profileForm.value);
}






