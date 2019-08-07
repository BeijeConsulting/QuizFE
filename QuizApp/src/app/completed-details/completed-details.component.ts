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
  quiz: completedQuiz;
  question: Question;
  answerUser: string;
  answerCorrect: string;

  constructor(
    private questionsService: QuestionsService,
    private risposteService: RisposteService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getRisposta();
    this.getQuiz();
  }

  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.risposteService.getQuiz(id).subscribe(quiz => {
      this.quiz = quiz;
    });
  }

  getCorrect(id: number) {
    this.answerUser = "";
    this.answerCorrect = "";
    this.quiz.answersuser.map(answer => {
      if (answer.id === id) {
        this.answerUser = answer.answer.toString();
        this.answerCorrect = answer.correct.toString();
      }
    });
    return this.answerCorrect === this.answerUser;
  }
  // getRsiposta(): void {
  //   const id = +this.route.snapshot.paramMap.get("id");
  //   this.risposteService
  //     .getRisposta(id)
  //     .subscribe(risposte => (this.risposta = risposte));
  //   console.log(this.risposta);

  // }

  // getQuestion1(id: number) {
  //   let correct: any[] = [];
  //   this.questions.map(risposta =>
  //     risposta.id === id
  //       ? risposta.answers.map(answer =>
  //           answer.correct ? correct.push(answer.value) : null
  //         )
  //       : null
  //   );
  //   // console.log("quest: ", correct);
  //   return correct;
  // }

  // getRisposta(id: number) {
  //   let correctuser: any[] = [];
  //   this.risposta.map(risposte =>
  //     risposte.id === id ? correctuser.push(risposte.answersuser) : null
  //   );
  //   // console.log("quest: ", correctuser);

  //   return correctuser;
  // }
}
