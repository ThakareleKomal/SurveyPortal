import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {

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
  updateSurvey(id:number){
    this.router.navigate(['updateSurvey', id]);
  }
  deleteSurvey(id:number){
    this.surveyService.deleteSurvey(id).subscribe(data=>{console.log(data);this.getSurveys();
    this.router.navigate(['/survey']);
    })
  }
}
