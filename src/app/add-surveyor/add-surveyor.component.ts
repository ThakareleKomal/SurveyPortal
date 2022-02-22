import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Surveyor } from '../surveyor';
import { SurveyorServiceService } from '../surveyor-service.service';

@Component({
  selector: 'app-add-surveyor',
  templateUrl: './add-surveyor.component.html',
  styleUrls: ['./add-surveyor.component.css']
})
export class AddSurveyorComponent implements OnInit {

  surveyor:Surveyor=new Surveyor();
  
  submitted = false;
  constructor(private router :Router, private service:SurveyorServiceService) { }

  ngOnInit(): void {
  }

  saveSurveyor(){
    this.service.addSurveyor(this.surveyor).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  goToSurveyorList(){
    this.router.navigate(['/surveyors'])
  }
  

  onSubmit() {
      console.log(this.surveyor) ;
      this.saveSurveyor(); 
  }

}
