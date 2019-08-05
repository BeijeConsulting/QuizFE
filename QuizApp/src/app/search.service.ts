import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Question } from './mockquestions/question';
import {QUESTIONS} from './mockquestions/mock-questions';

@Injectable({
  providedIn: 'root'
})
export class QuizService {


  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


 private quizurl =  'api/question';



 getquestions(): Observable<Question[]> {
   return this.http.get<Question[]>(this.quizUrl)  // ---> una volta finito chiedi come prelevare le domande
   .pipe(tap(_ => this.log('fetched questions')))

}



 searchQuestions(term: string): Observable<Question[]> {

   if(!term.trim()){

     return of([]);
   }

   return this.http.get<Question[]>(`${this.quizurl}/?tag=${term}`)   // ---> una volta finito chiedi come prelevare le domande
    .pipe(tap(_=> this.log(`found questions matching "${term}"`)))
 }

  constructor( private http: Httpclient) { }







}
