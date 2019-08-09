import { Component, OnInit, Input } from '@angular/core';
import { QuestionSenderService } from '../question-sender.service'
import { QuestionsService } from '../questions.service';
import { Answer } from 'app/mockquestions/question';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {
@Input() edit: boolean = false
  answers: Answer[]

  constructor(
    private questionsenderService: QuestionSenderService,
    private questionsService: QuestionsService
  ) {
      }


  ngOnInit() {
    if (this.edit) {
      this.questionsenderService.question.id = this.questionsService.question.id
    }
  }

  emptyQuestion() {
    this.questionsenderService.emptyQuestion()
  }

  

  submit(cond) {
    if (cond) {
    console.log(this.answers)
    this.questionsenderService.submit()
  } else {
    this.questionsenderService.update()
  }
  }

}
