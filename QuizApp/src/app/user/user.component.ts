import { Component, OnInit } from '@angular/core';
import { QuizService } from 'app/quiz.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private quizService : QuizService
  ) { }

  ngOnInit() {
  }
  getTotQuestions(){
    return this.quizService.getTotQuestions();
  }
  getCounter(){
    return this.quizService.counter>0;
  }
}
