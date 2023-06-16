import { Component } from '@angular/core';
import { ServiceSampleService } from '../service-sample.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  getValue:any=[];
  constructor(private appservice:ServiceSampleService, private router:Router){
   }
  profileForm = new FormGroup({
   Name:new FormControl(''),
   Age:new FormControl(''),
   Contact:new FormControl(''),
 })
 
 onSubmit(){
   this.getValue=[this.profileForm.value];
   console.log(this.getValue,"app get");
   this.appservice.setVal(this.getValue);
   this.router.navigateByUrl('student');
 }
}
