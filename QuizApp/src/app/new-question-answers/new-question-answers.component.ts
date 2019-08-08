import { Component, OnInit } from '@angular/core';
import { QuestionSenderService } from '../question-sender.service'

@Component({
  selector: 'app-new-question-answers',
  templateUrl: './new-question-answers.component.html',
  styleUrls: ['./new-question-answers.component.scss']
})
export class NewQuestionAnswersComponent implements OnInit {
answertype: string = 'radio'
answerdef: string = 'Risposta singola'
answervalue: string

  constructor(
    private qss: QuestionSenderService
  ) { }



  ngOnInit() {
  }

onChange(val: string): void {
  this.answertype = val
  if (this.answertype === 'radio') {
    this.answerdef = 'Risposta singola'
  } else if (this.answertype === 'checkbox') {
    this.answerdef = 'Risposte multiple'
  } else {
    this.answerdef = 'Risposta aperta'
  }
  this.qss.giveAnswerType(this.answertype)
}


}
