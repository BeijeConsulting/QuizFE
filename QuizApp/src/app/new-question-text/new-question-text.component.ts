import { Component, OnInit } from '@angular/core';
import { QuestionSenderService } from '../question-sender.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-question-text',
  templateUrl: './new-question-text.component.html',
  styleUrls: ['./new-question-text.component.scss']
})
export class NewQuestionTextComponent implements OnInit {
  editor: boolean = true
  subscription: Subscription
  constructor(
    private qss: QuestionSenderService,
  ) {
   }

  setEditor() {
    this.editor = !this.editor
  }
send(text) {
  this.qss.giveText(text)
}

  ngOnInit() {
  }

}
