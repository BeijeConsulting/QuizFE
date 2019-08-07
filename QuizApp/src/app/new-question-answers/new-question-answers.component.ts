import { Component, OnInit } from '@angular/core';
import { QuestionSenderService } from '../question-sender.service'

@Component({
  selector: 'app-new-question-answers',
  templateUrl: './new-question-answers.component.html',
  styleUrls: ['./new-question-answers.component.scss']
})
export class NewQuestionAnswersComponent implements OnInit {
answertype: string = 'radio'
answervalue: string

  constructor() { }



  ngOnInit() {
  }

onChange(val: string): void {
  this.answertype = val
  console.log(this.answertype === 'radio')
}

valueDef(val: string): void {
  if (val === 'alfabeto') {
    this.answervalue = 'a'
  } else {
    this.answervalue = '1'
  }
}
}
