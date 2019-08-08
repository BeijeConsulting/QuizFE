import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Question} from './mockquestions/question';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  questionsUrl = 'api/questions'; //?id='quello che gli passo io'




  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }



  deleteQuestion(question: Question): Observable<Question>{
    //const id = question.id;
    const id = typeof question === 'number' ? question : question.id;
    const url = `${this.questionsUrl}/${id}`;

    return this.http.delete<Question>(url, this.httpOptions);
  }
 // return this.http.get<Question[]>(this.questionsUrl).pipe(map());

   // searchQuestions(tag: string[]): string[] {}
    // return this.http.get<Question[]>(`${this.questionUrl}/?tag=${term}`)
   constructor(private http: HttpClient) { }


}
