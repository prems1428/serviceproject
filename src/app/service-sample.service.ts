import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceSampleService implements OnInit {
  getFormVal:any=[];
  constructor(private http:HttpClient) { 
    
  }
  ngOnInit(): void {
   console.log(this.getFormVal,"getform"); 
  }

  setVal(getFormVal:any[]){
    this.getFormVal= getFormVal;
    console.log(this.getFormVal,"service getform");
  }
  getVal(){
    return this.getFormVal;
  }
}
