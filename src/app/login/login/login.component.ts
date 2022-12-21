import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login\login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public email:string="";
  public password:string="";
  public navbar:boolean=false;

  constructor(public AuthService:AuthService, public router:Router) { }

  ngOnInit(): void {
  }

  onSubmitLogin(){
  	this.AuthService.loginEmail(this.email,this.password).subscribe((token:any)=>{
      console.log(token.token);
      localStorage.setItem('isLoggedIn',"true");
      localStorage.setItem('token', token.token);
      this.router.navigate(['/dashboard']);
    },err=>{
      console.log("error: "+err);
    }
    );
  }
  }


