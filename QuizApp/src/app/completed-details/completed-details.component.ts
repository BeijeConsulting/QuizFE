import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Question } from "app/mockquestions/question";
import { QuestionsService } from "app/questions.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-completed-details",
  templateUrl: "./completed-details.component.html",
  styleUrls: ["./completed-details.component.scss"]
})
export class CompletedDetailsComponent implements OnInit {
  questions: Question;
  constructor(
    private questionsService: QuestionsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.questionsService
      .getQuestion(id)
      .subscribe(question => (this.questions = question));
  }
}
