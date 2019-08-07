import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Question } from "./mockquestions/question";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  constructor(private http: HttpClient) {}
  private questionsUrl = "api/questions";

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  getQuestion(id: number): Observable<Question> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get<Question>(url);
  }
}
