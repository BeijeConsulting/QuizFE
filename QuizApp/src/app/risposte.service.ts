import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { completedQuiz } from "./mockquestions/question";

@Injectable({
  providedIn: "root"
})
export class RisposteService {
  constructor(private http: HttpClient) {}
  private risposteUrl = "api/risposte";

  getRisposte(): Observable<completedQuiz[]> {
    return this.http.get<completedQuiz[]>(this.risposteUrl);
  }

  getQuiz(id: number): Observable<completedQuiz> {
    const url = `${this.risposteUrl}/${id}`;
    return this.http.get<completedQuiz>(url);
  }
}
