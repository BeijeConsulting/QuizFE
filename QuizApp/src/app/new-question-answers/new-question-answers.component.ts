import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-question-answers',
  templateUrl: './new-question-answers.component.html',
  styleUrls: ['./new-question-answers.component.scss']
})
export class NewQuestionAnswersComponent implements OnInit {
answertype: string = 'radio'
  constructor() { }



  ngOnInit() {
  }

onChange(val): void {
  this.answertype = val
  console.log(this.answertype === 'radio')
}
}
