import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../question';
import { QuestionServiceService } from '../question-service.service';
import { Option } from '../option';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  question:Question;
  index!:Option;
  optionalText!:Option;

 constructor(private route: ActivatedRoute,private router:Router, private questionService:QuestionServiceService){
    this.question=new Question();

  }
  saveQuestion(){
    this.questionService.save(this.question).subscribe(data=>{console.log(data);});
    
    this.getAllQuestion;
  }


  getAllQuestion(){
    this.router.navigate(['/question']);
  }

  onSubmit(){
    console.log(this.question);
    this.saveQuestion();
    alert("Added Sucessfully");
   }
  ngOnInit(): void {
  }
}
