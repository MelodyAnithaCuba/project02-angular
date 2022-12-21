import { LoginComponent } from './login/login/login.component';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';
import { ListAssignmentComponent } from './components/list-assignment/list-assignment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'list-assignments',component:ListAssignmentComponent},
  {path:'add-assignments',component:AddAssignmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
