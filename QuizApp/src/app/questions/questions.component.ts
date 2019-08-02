import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Question } from '../mockquestions/question'


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

  getquestions(): void {

    const id= +this.route.snapshot.paramMao.get('id');
    this.quizService.getquestions(id)
      .subscribe(albums => {this.questions = questions})
  }

}
