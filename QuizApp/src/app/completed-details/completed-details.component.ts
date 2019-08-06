import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Question, completedQuiz } from "app/mockquestions/question";
import { QuestionsService } from "app/questions.service";
import { RisposteService } from "app/risposte.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-completed-details",
  templateUrl: "./completed-details.component.html",
  styleUrls: ["./completed-details.component.scss"]
})
export class CompletedDetailsComponent implements OnInit {
  questions: Question[];
  risposta: completedQuiz[];
  question: Question;

  constructor(
    private questionsService: QuestionsService,
    private risposteService: RisposteService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getRisposta();
    this.getQuestion();
  }

  getQuestion(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.questionsService
      .getQuestion(id)
      .subscribe(question => (this.question = question));
  }
  // getRsiposta(): void {
  //   const id = +this.route.snapshot.paramMap.get("id");
  //   this.risposteService
  //     .getRisposta(id)
  //     .subscribe(risposte => (this.risposta = risposte));
  //   console.log(this.risposta);
  // }

  getQuestion1(id: number) {
    let correct: any[] = [];
    this.questions.map(risposta =>
      risposta.id === id
        ? risposta.answers.map(answer =>
            answer.correct ? correct.push(answer.value) : null
          )
        : null
    );
    // console.log("quest: ", correct);
    return correct;
  }

  getRisposta(id: number) {
    let correctuser: any[] = [];
    this.risposta.map(risposte =>
      risposte.id === id ? correctuser.push(risposte.answersuser) : null
    );
    // console.log("quest: ", correctuser);

    return correctuser;
  }
}
