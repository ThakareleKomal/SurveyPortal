import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question';
import { QuestionServiceService } from '../question-service.service';

@Component({
  selector: 'app-participant-feedback',
  templateUrl: './participant-feedback.component.html',
  styleUrls: ['./participant-feedback.component.css']
})
export class ParticipantFeedbackComponent implements OnInit {

 question!: Question[];
  constructor( private questionService:QuestionServiceService,private router:Router) { 
  }

  ngOnInit():void {
    this.getAll();
  }
  private getAll(){
    this.questionService.findAll().subscribe(data=>{
    this.question=data;
   });
  
  }
  updateQuestion(id:number){
    this.router.navigate(['updateQuestion',id]);
  }
}
