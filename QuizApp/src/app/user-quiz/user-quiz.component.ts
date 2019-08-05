import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'app/mockquestions/question';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service'
import { QuestionsService } from 'app/questions.service';

@Component({
  selector: 'app-user-quiz',
  templateUrl: './user-quiz.component.html',
  styleUrls: ['./user-quiz.component.scss']
})
export class UserQuizComponent implements OnInit {
  question: Question;
  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.getQuestion(routeParams.id);
    });
  }
  
  getQuestion(id : number): void {
    this.questionsService.getQuestion(id)
      .subscribe(question => this.question = question);
  }

}
