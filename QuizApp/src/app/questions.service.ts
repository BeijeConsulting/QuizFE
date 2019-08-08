import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './mockquestions/question';

@Injectable({
  providedIn: "root"
})
export class QuestionsService {

  questionsUrl = 'api/questions';
  tagsUrl = 'api/tags';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  getQuestion(id: number): Observable<Question> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get<Question>(url);
  }
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(this.tagsUrl)
  }
  searchQuestions(tagValue: string[]): Observable<Question[]>{
    console.log(this.questionsUrl + '?tag=' + tagValue.join('&tag='))
    return this.http.get<Question[]>(this.questionsUrl + '?tag=' + tagValue.join('&tag='))
  }
}
