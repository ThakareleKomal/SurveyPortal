import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question';
import { QuestionServiceService } from '../question-service.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

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
  // updateQuestion(id:number){
  //   this.router.navigate(['updateQuestion',id]);
  // }
  deleteQuestion(id:number){
    this.questionService.deleteQuestion(id).subscribe(data=>{console.log(data);this.getAll();})
  }


}
