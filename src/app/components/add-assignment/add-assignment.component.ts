import { Assignment } from './../../models/assignment';
import { Router } from '@angular/router';
import { assignmentService } from './../../services/assignment.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.scss']
})
export class AddAssignmentComponent implements OnInit{

  constructor(
    public assignmentService:assignmentService,
    private router:Router) { }

    ngOnInit(): void {

    }

    onSubmit(assignmentForm:NgForm){
      if(assignmentForm.value.id==null){
        this.assignmentService.createAssignment(assignmentForm.value)
        .subscribe((Response)=>{
          this.router.navigate(["/assignments"]);
        });
      }else{
        this.assignmentService.updateAssignment(assignmentForm.value.id,assignmentForm.value)
        .subscribe((Response)=>{
          this.router.navigate(["/assignments"]);
        });
      }
      this.resetForm(assignmentForm);
    }

    resetForm(assignmentForm:NgForm){
      if(assignmentForm !=null){
        assignmentForm.reset();
        this.assignmentService.selectAssignment=new Assignment();
      }
    }

}
