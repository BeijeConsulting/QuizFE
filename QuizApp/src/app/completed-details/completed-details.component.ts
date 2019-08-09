import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Question, completedQuiz } from "../mockquestions/question";
import { QuestionsService } from "../questions.service";
import { RisposteService } from "../risposte.service";
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
  answerUserCorect: [];
  quest: any = null;

  constructor(
    private questionsService: QuestionsService,
    private risposteService: RisposteService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.risposteService.getQuiz(id).subscribe(quiz => {
      this.quiz = quiz;
      console.log("quiz:", this.quiz);
    });
  }
  openDialog(id: number) {
    this.quest = " ";
    this.questionsService.getQuestion(id).subscribe(quest => {
      this.quest = quest;
      console.log("quest:", this.quest);
    });
  }
  closeDialog() {
    this.quest = null;
  }
  userAnswer(val) {
    let answersUser = this.quiz.answersuser.find(
      item => item.id === this.quest.id
    );    
    return answersUser.answer.indexOf(val) != -1;
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
}
