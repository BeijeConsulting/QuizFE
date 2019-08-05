import { Component, OnInit } from "@angular/core";
import { Question } from "../mockquestions/question";
import { QuestionsService } from "app/questions.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-user-completed",
  templateUrl: "./user-completed.component.html",
  styleUrls: ["./user-completed.component.scss"]
})
export class UserCompletedComponent implements OnInit {
  questions: Question[];

  constructor(
    private questionService: QuestionsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
    });
  }
}
