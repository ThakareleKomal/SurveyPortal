import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SregistrationService } from '../sregistration.service';
import { Suser } from '../suser';

@Component({
  selector: 'app-surveyor-login',
  templateUrl: './surveyor-login.component.html',
  styleUrls: ['./surveyor-login.component.css']
})
export class SurveyorLoginComponent implements OnInit {

  user=new Suser();
  msg='';

  constructor(private _service:SregistrationService,private __route:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received")
        this.__route.navigate(['/surveyorhome'])
      },
      error=>{
      console.log("exception occured");
     this.msg="Bad credentials,please enter valid emailid and password";
      }
      
    );
   
   
  }
  gotoregistration(){
    this.__route.navigate(['/Surveyorregister'])
  }

}
