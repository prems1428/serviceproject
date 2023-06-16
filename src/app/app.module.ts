import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ServiceSampleService } from './service-sample.service';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    ServiceSampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
