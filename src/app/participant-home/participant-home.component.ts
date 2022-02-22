import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participant-home',
  templateUrl: './participant-home.component.html',
  styleUrls: ['./participant-home.component.css']
})
export class ParticipantHomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onView(){
    this.route.navigate(['/viewsurvey']);
  }

}
