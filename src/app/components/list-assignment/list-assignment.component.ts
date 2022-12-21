import { Assignment } from './../../models/assignment';
import { assignmentService } from './../../services/assignment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-assignment',
  templateUrl: './list-assignment.component.html',
  styleUrls: ['./list-assignment.component.scss']
})
export class ListAssignmentComponent implements OnInit {

  assignmentList:any=[];

  constructor(public assignmentService:assignmentService,private router:Router) { }

  ngOnInit():void{
    this.loadAssignment();
  }

  loadAssignment(){
    return this.assignmentService.getAssignment().subscribe((data:{})=>{

    });
  }

  deleteAssignment(id:number){
    this.assignmentService.deleteAssignment(id).subscribe((response)=>{
        this.loadAssignment();
    });
  }

  onEdit(assignment:Assignment){
    console.log(assignment);
    this.assignmentService.selectAssignment=Object.assign({},assignment);
    this.router.navigate(["/add-assignment"]);
  }
}
