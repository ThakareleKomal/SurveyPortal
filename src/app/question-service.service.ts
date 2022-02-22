import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  private questionUrl = "http://localhost:8086/question/getQ";
  private questionUrl1="http://localhost:8086/question/updateQ";
  private questionl2="http://localhost:8086/question/delStud";
 
  constructor(private http: HttpClient){ }
  
   findAll():Observable <Question[]>
  {
     return this.http.get<Question[]>(`http://localhost:8086/question/getAllQ`);
  }
  save(question:Question ): Observable<Object> {
    return this.http.post(`http://localhost:8086/question/addQ`, question);
  }
  getQuestionById(id :number):Observable<Question>{
    return this.http.get<Question>(`${this.questionUrl}/${id}`);
  }
  updateQuestion(id:number, question:Question ):Observable<Object>{
    return this.http.put(`${this.questionUrl1}/${id}`,question);
  }
  deleteQuestion(id:number):Observable<Object>{
    return this.http.delete(`${this. questionl2}/${id}`);
  }
}
