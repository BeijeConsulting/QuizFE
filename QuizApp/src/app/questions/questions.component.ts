import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];

  constructor(
               private route: ActivatedRoute,
               private quizService: QuizService,
               private location: Location

) { }

  ngOnInit() {
    this.getquestions();
  }

  getquestions();

}
