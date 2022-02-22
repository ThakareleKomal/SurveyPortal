import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Surveyor } from '../surveyor';
import { SurveyorServiceService } from '../surveyor-service.service';

@Component({
  selector: 'app-surveyor-list',
  templateUrl: './surveyor-list.component.html',
  styleUrls: ['./surveyor-list.component.css']
})
export class SurveyorListComponent implements OnInit {
  surveyors!: Surveyor[] ;
  id!:number;
  constructor(private surveyorservice:SurveyorServiceService,private router : Router) { }

  ngOnInit() {
   this.getSurveyors();

  }
  private getSurveyors(){
    this.surveyorservice.getSurveyorList().subscribe(data =>{
      this.surveyors=data;
    });
  }
    updateSurveyor(id:number){
      this.router.navigate(['update-surveyor',id]);
    }

    deleteSurveyor(id:number){
      this.surveyorservice.deleteSurveyor(id).subscribe(data => {
        console.log(data);
        this.getSurveyors();
      });
    }


}
