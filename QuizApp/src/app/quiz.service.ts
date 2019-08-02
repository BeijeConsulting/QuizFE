import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Question } from './mockquestions/question'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor( private http: Httpclient) { }


   private quizurl =


   getquestions(): Observable<Question[]> {
     const url=
     return
   }


}
