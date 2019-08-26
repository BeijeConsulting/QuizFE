import { Component, OnInit, Input } from '@angular/core';
import { QuestionSenderService } from '../question-sender.service'
import { QuestionsService } from '../questions.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-question-text',
  templateUrl: './new-question-text.component.html',
  styleUrls: ['./new-question-text.component.scss']
})
export class NewQuestionTextComponent implements OnInit {
  @Input() edit
  @Input() markdown
  @Input() texterr
  editor: boolean = true
  subscription: Subscription
  constructor(
    private qss: QuestionSenderService,
    private qs: QuestionsService
  ) {
   }

  setEditor() {
    this.editor = !this.editor
  }
send(text) {
  this.qss.giveText(text)
}

  ngOnInit() {
    this.qss.changetext.subscribe(err => {this.texterr = err})
    if (this.edit) {
      this.markdown = this.qs.question.text
      this.send(this.markdown)
    }
  }

}
