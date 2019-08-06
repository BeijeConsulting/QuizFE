import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Question } from './mockquestions/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  thisQuestion : Question;
  questionsUrl = 'api/questions';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }
}
