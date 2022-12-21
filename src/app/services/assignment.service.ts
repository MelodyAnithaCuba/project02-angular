import { Assignment } from './../models/assignment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class assignmentService {

  selectAssignment:Assignment=new Assignment();

  constructor(private http:HttpClient) { }
  API='http://127.0.0.1:8000/api/assignments';

   reqHeader=new HttpHeaders({
    'Content-type' : 'aplication/json',
    'Authorization' : 'token'+ localStorage.getItem('token')
  });

  getAssignment(){

    return this.http.get(this.API,{ headers: this.reqHeader });
  }

  createAssignment(assignment: Assignment){
    console.log(assignment);
    return this.http.post(this.API,assignment,{ headers: this.reqHeader });
  }

  updateAssignment(id:number,assignment:Assignment){
    return this.http.put(this.API+id+'/',assignment,{ headers: this.reqHeader });
  }

  deleteAssignment(id:number){
    return this.http.delete(this.API+id+'/',{ headers: this.reqHeader });

  }
}



