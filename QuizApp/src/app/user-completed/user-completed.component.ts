import { Component, OnInit } from "@angular/core";
import { Question } from "../mockquestions/question";
import { QuestionsService } from "app/questions.service";
import { completedQuiz } from "../mockquestions/question";
import { RisposteService } from "app/risposte.service";

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
    this.getQuestions();
    this.getRisposte();
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
    });
  }

  getRisposte(): void {
    this.risposteService.getRisposte().subscribe(risposte => {
      this.quizTot = risposte;
    });
  }

  getQuestion(id: number) {
    let correct: any[] = [];
    this.questions.map(risposta =>
      risposta.id === id
        ? risposta.answers.map(answer =>
            answer.correct ? correct.push(answer.value) : null
          )
        : null
    );
    console.log("quest: ", correct);
    return correct;
  }

  getQuiz(id: number) {
    let correctuser: any[] = [];
    this.quizTot.map(risposte =>
      risposte.id === id ? correctuser.push(risposte.id) : null
    );
    console.log("quest: ", correctuser);

    return correctuser;
  }
}
