import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-question-text',
  templateUrl: './new-question-text.component.html',
  styleUrls: ['./new-question-text.component.scss']
})
export class NewQuestionTextComponent implements OnInit {
  editor: boolean = true
  constructor() { }

  setEditor() {
    this.editor = !this.editor
  }
  ngOnInit() {
  }

}
