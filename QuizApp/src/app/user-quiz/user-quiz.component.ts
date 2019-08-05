import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'app/mockquestions/question';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service'

@Component({
  selector: 'app-user-quiz',
  templateUrl: './user-quiz.component.html',
  styleUrls: ['./user-quiz.component.scss']
})
export class UserQuizComponent implements OnInit {
  //@Input() question: Question;
  constructor(
    private route: ActivatedRoute,
    //private quizService: QuizService
  ) { }

  ngOnInit(): void {
    //this.getQuestion();
  }
  // getQuestion(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   console.log(id);
  //   this.quizService.getQuestion(id)
  //     .subscribe(question => this.question = question);
  // }

}
