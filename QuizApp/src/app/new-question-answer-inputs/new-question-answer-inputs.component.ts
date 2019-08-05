import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-question-answer-inputs',
  templateUrl: './new-question-answer-inputs.component.html',
  styleUrls: ['./new-question-answer-inputs.component.scss']
})
export class NewQuestionAnswerInputsComponent implements OnInit {

  constructor() { }
  @Input() answer: string
  ngOnInit() {
  }

}
