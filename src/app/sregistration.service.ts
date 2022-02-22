import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suser } from './suser';

@Injectable({
  providedIn: 'root'
})
export class SregistrationService {

  constructor(private __http : HttpClient) { }

  public loginUserFromRemote(user: Suser):Observable<any>{
    return this.__http.post<any>("http://localhost:8086/surveyorlogin",user)

  }
  public registerUserFromRemote(user:Suser):Observable<any>{
    return this.__http.post<any>("http://localhost:8086/surveyoruser",user);
  } 
}
