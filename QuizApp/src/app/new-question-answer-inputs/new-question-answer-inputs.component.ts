import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { QuestionSenderService } from '../question-sender.service'
import { Answer } from 'app/mockquestions/question';
import { count } from 'rxjs/operators';


@Component({
  selector: 'app-new-question-answer-inputs',
  templateUrl: './new-question-answer-inputs.component.html',
  styleUrls: ['./new-question-answer-inputs.component.scss']
})
export class NewQuestionAnswerInputsComponent implements OnInit {
  count = [0,1]
  contatore: number = 1
  correct: boolean[] = []
  input: string[] = []
  answers: Answer[] = []

  constructor(private fb: FormBuilder,
    private qss: QuestionSenderService) { }
  @Input() answer: string
  @Input() value: string
  ngOnInit() {
    // for(let i=0; i< this.input.length; i++) {
    //   this.radio.push(false)
    //   this.check.push(false)
    }

  
  

  addAnswer() {
    this.contatore++
    this.count.push(this.contatore)
    this.addToArray()
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
    this.answers = [] 
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
