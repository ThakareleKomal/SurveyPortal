import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from '../topic';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-view-topic',
  templateUrl: './view-topic.component.html',
  styleUrls: ['./view-topic.component.css']
})
export class ViewTopicComponent implements OnInit {

  topicsurve!: Topic[];
  

  constructor(private topicsservice:TopicService,private router:Router) { }

  ngOnInit(): void {
    this.getAlltopicsList();
  

  }
  private getAlltopicsList(){
    this.topicsservice.findAll().subscribe(data=>{
      this.topicsurve=data;
    });
   
  }


}
