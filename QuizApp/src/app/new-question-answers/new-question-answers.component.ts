import { Component, OnInit, Input } from '@angular/core';
import { QuestionSenderService } from '../question-sender.service'
import { QuestionsService } from '../questions.service'

@Component({
  selector: 'app-new-question-answers',
  templateUrl: './new-question-answers.component.html',
  styleUrls: ['./new-question-answers.component.scss']
})
export class NewQuestionAnswersComponent implements OnInit {
@Input() edit
answertype: string = 'radio'
answerdef: string = 'Risposta singola'
answervalue: string

  constructor(
    private qss: QuestionSenderService,
    private qs: QuestionsService
  ) { }



  ngOnInit() {
    this.qss.giveAnswerType(this.answertype)
    if (this.edit) {
      this.answertype = this.qs.question.answertype
    }
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
