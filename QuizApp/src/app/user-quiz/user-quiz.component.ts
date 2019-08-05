import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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
  @Input() question: Question;
  id = +this.route.snapshot.paramMap.get('id');
  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.getQuestion();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
  }
  getQuestion(): void {
    this.questionsService.getQuestion(this.id)
      .subscribe(question => this.question = question);
  }

}
