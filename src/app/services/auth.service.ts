import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) {}

   API="http://127.0.0.1:8000/api/auth/";

  reqHeader = new HttpHeaders({
    'content-Type': 'application/json',
    'authorization' : 'token cbe45713903f0e159565553e96fd62d3f3f184a3',
  });

  loginEmail(email:string, pass:string){
    return this.http.post(this.API+"/login",{ email: email,password:pass });
  }
}
