import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.component.html',
  styleUrls: ['./view-survey.component.css']
})
export class ViewSurveyComponent implements OnInit {

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
