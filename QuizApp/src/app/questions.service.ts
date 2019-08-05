import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Question} from './mockquestions/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questionsUrl = 'api/questions';
  tagsUrl = 'api/tags';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }
  getTags(): Observable<string[]> {
    return this.http.get<string[]>(this.tagsUrl)
  }
  searchTag(term: string): Observable<string[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<string[]>(`${this.tagsUrl}?tag=${term}`)
  }
}
