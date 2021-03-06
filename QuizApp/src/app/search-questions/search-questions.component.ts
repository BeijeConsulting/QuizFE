import { Component, OnInit, Input, Output } from "@angular/core";
import { Question } from "../mockquestions/question";
import { QuestionsService } from "../questions.service";
import { SidebarService } from "../sidebar.service";
import { QuizService } from "app/quiz.service";

@Component({
  selector: "app-search-questions",
  templateUrl: "./search-questions.component.html",
  styleUrls: ["./search-questions.component.scss"]
})

export class SearchQuestionsComponent implements OnInit {
  @Input() searchBarValue: string;
  edit: boolean = false;
  questions: Question[] = [];
  tags: string[];
  foundTags: string[];
  searchedTags: string[] = [];

  constructor(
    private questionService: QuestionsService, 
    private sidebarService: SidebarService,
    private quizService : QuizService
    ) {}

  ngOnInit() {
    this.getTags();
  }

  getTags(): void {
    this.questionService.getTags().subscribe(res => (this.tags = res));
  }

  searchTags(): void {
    this.searchBarValue.toLocaleLowerCase();
    this.foundTags = this.tags.filter(
      t => (t.indexOf(this.searchBarValue) !== -1 && this.searchedTags.indexOf(t) === -1)
    );
  }

  addTag(e: KeyboardEvent, tag = ""): void {
    let toAdd = tag || this.searchBarValue.toLocaleLowerCase().replace(/[^a-z0-9]/gi, '');
    if (tag || e.code === "Enter" || e.code === "Space") {
      if (toAdd && this.searchedTags.indexOf(toAdd) === -1) {
        this.searchedTags.push(toAdd);
        this.searchQuestions();
      }
      this.searchBarValue = "";
    }
  }

  searchQuestions() {
    this.questionService.searchQuestions(this.searchedTags).subscribe(res => {
      this.questions = res;
      if (!this.getLogin()){
        this.quizService.addQuiz(this.questions);
      }
    })
    this.searchBarValue = '';
  }

  deleteQuestion(question: Question){
    this.questionService.deleteQuestion(question).subscribe(res => this.searchQuestions());
  }

  deleteTag(tag: string){
    this.searchedTags = this.searchedTags.filter(t => t !== tag)
    if(this.searchedTags.length){
      console.log(this.searchedTags)
      this.searchQuestions();
    }else {
      this.questions = []
      if (!this.getLogin()){
        this.quizService.clearQuiz();
      }
    }
  }

  getLogin() {
    return this.sidebarService.getLogin();
  }

  editQuestion(question: Question): void {
    this.edit = true
    this.questionService.editQuestion(question)
  }
  clearEdit(){
    this.edit=false;
  }
}
