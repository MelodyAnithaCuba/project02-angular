import { assignmentService  } from './services/assignment.service';
import { Assignment } from './models/assignment';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';
import { EditAssignmentComponent } from './components/edit-assignment/edit-assignment.component';
import { ListAssignmentComponent } from './components/list-assignment/list-assignment.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    ListAssignmentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [assignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
