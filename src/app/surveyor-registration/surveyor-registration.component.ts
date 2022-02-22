import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SregistrationService } from '../sregistration.service';
import { Suser } from '../suser';

@Component({
  selector: 'app-surveyor-registration',
  templateUrl: './surveyor-registration.component.html',
  styleUrls: ['./surveyor-registration.component.css']
})
export class SurveyorRegistrationComponent implements OnInit {

  user=new Suser();
  msg='';
  constructor(private __service:SregistrationService,private __router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.__service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        this.__router.navigate(['/Surveyorlogin']);
      },
      error=>{
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }

}
