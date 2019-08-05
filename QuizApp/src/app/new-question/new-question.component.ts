import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {
editor: any = true
  constructor() { }

  setEditor() {
    this.editor = !this.editor
  }
  ngOnInit() {
  }

}
