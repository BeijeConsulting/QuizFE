import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './mockquestions/question';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: "root"
})
export class QuestionsService {

  questionsUrl = 'api/questions';
  tagsUrl = 'api/tags';

  $editableQuestion: Observable<Question>; 

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
    return this.http.get<Question[]>(this.questionsUrl + '?tag=' + tagValue.join('&tag='))
  }

  deleteQuestion(question: Question): Observable<{}> {
    const url = this.questionsUrl + '/' + question.id;
    return this.http.delete(url, httpOptions)
  }

  updateQuestion(id: number): void {
    
    this.$editableQuestion = this.http.get<Question>(this.questionsUrl + '/' + id);

  }
}
