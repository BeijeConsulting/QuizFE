import { Component, OnInit } from '@angular/core';
import { QuestionSenderService } from '../question-sender.service'
import { Answer } from 'app/mockquestions/question';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {
answers: Answer[]
  constructor(
    private questionsenderService: QuestionSenderService,
    
  ) { }


  ngOnInit() {
  }

  stampaaschermo() {
     
    console.log(this.answers)
    this.questionsenderService.getTag().subscribe(tag => console.log(tag))
  }

}
