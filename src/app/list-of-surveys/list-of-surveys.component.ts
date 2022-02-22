import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-list-of-surveys',
  templateUrl: './list-of-surveys.component.html',
  styleUrls: ['./list-of-surveys.component.css']
})
export class ListOfSurveysComponent implements OnInit {

  survey!: Survey[];
 
  constructor(private surveyService:SurveyService,private router:Router) { }

  ngOnInit(): void {
    this.getSurveys();
    
  }
  private getSurveys(){
    this.surveyService.findAll().subscribe(data=>{
      this.survey=data;
    });
  }
}
