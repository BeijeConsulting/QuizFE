import { Component, OnInit, Input } from '@angular/core';
import { QuestionSenderService } from '../question-sender.service'
import { QuestionsService } from '../questions.service';
import { Answer } from 'app/mockquestions/question';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {
answers: Answer[]
@Input() miagolo= false;

  constructor(
    private questionsenderService: QuestionSenderService,
    private questionsService: QuestionsService
  ) {
      }


  ngOnInit() {
    this.questionsService.$editableQuestion.subscribe(res => console.log(res))
  }

  

  stampaaschermo() {
    this.questionsenderService.submit()
  }

}
