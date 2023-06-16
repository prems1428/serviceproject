import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'',component:ParentComponent},
  {path:'student',component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


