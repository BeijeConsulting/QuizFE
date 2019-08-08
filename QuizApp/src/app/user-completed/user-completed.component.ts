import { Component, OnInit } from "@angular/core";
import { Question } from "../mockquestions/question";
import { QuestionsService } from "../questions.service";
import { completedQuiz } from "../mockquestions/question";
import { RisposteService } from "../risposte.service";

@Component({
  selector: "app-user-completed",
  templateUrl: "./user-completed.component.html",
  styleUrls: ["./user-completed.component.scss"]
})
export class UserCompletedComponent implements OnInit {
  questions: Question[];
  quizTot: completedQuiz[] = [];

  constructor(
    private questionService: QuestionsService,
    private risposteService: RisposteService
  ) {}

  ngOnInit() {
    this.getRisposte();
  }

  getRisposte(): void {
    this.risposteService.getRisposte().subscribe(risposte => {
      this.quizTot = risposte;
    });
  }
  getSumCorrectFunct(id: number) {
    let count: number = 0;
    let quiz = this.quizTot.filter(quiz => quiz.id === id)[0];
    quiz.answersuser.map(answer => {
      if (answer.correct.toString() === answer.answer.toString()) {
        count++;
      }
    });
    console.log("Giuste: ", count, " Totale: ", quiz.answersuser.length);
    return count + "/" + quiz.answersuser.length;
  }
}
