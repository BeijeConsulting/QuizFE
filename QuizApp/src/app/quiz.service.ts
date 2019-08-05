import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from 'app/mockquestions/question';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class QuizService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private questionUrl = 'api/question'; 

  constructor(
    private http: HttpClient
  ) { }

  getQuestion(id: number): Observable<Question> {
    const url = `${this.questionUrl}/${id}`;
    return this.http.get<Question>(url).pipe(
      tap(_ => console.log(`fetched question id=${id}`)),
      catchError(this.handleError<Question>(`getQuestion id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
