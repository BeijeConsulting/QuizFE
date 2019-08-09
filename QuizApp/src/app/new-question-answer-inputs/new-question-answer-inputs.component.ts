import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { QuestionSenderService } from '../question-sender.service'
import { Answer } from 'app/mockquestions/question';
import { QuestionsService } from '../questions.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-new-question-answer-inputs',
  templateUrl: './new-question-answer-inputs.component.html',
  styleUrls: ['./new-question-answer-inputs.component.scss']
})
export class NewQuestionAnswerInputsComponent implements OnInit {
  @Input() edit
  count = [0,1]

  contatore: number = 1
  correct: boolean[] = []
  input: string[] = []
  answers: Answer[] = []
  subscription: Subscription

  constructor(private fb: FormBuilder,
    private qss: QuestionSenderService,
    private qs: QuestionsService) {

     }
  @Input() answer: string
  @Input() value: string
  ngOnInit() {
    if (this.edit) {
      this.count = []
      this.contatore = -1
      this.qs.question.answers.forEach(answer => {
        this.addAnswer()
        this.answers.push(answer)
        console.log(this.answers)
        this.qss.giveAnswers(this.answers)
      })
      
    }

    }

    getcheck(count) {
      if (this.edit) {
        return this.answers[count].correct
      } else {return false}
    }

  
  

  addAnswer() {
    this.contatore++
    this.count.push(this.contatore)
    
    !this.edit ? this.addToArray() : null
  } 
  delInput(i) {
    this.count = this.count.filter(item => item !== i)
    this.addToArray()
  }

  addToArray() {
    this.correct = []
    document.querySelectorAll("input[name='answer']").forEach(input => this.correct.push((<HTMLInputElement>input).checked))
    this.input = []
    document.querySelectorAll('input[name="input"]').forEach(input => this.input.push((<HTMLInputElement>input).value))
    this.generateAnswer()
  }
 

  generateAnswer() { 
    
    for(let i:number = 0; i < this.count.length; i++) {
      this.answers[i] = {
        value: i.toString(),
        text: this.input[i],
        correct: this.correct[i]
      }
    }
    this.qss.giveAnswers(this.answers)
  }



}



 
