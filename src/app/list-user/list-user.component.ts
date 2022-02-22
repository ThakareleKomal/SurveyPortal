import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
 
  user! :User[];
  constructor(private service :RegistrationService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  private getAllUser(){
    this.service.getAllUser().subscribe(data=>{
      this.user=data;
    });
  }
}
