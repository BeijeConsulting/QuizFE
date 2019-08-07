import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { QuestionSenderService } from '../question-sender.service'
import { Answer } from 'app/mockquestions/question';


@Component({
  selector: 'app-new-question-answer-inputs',
  templateUrl: './new-question-answer-inputs.component.html',
  styleUrls: ['./new-question-answer-inputs.component.scss']
})
export class NewQuestionAnswerInputsComponent implements OnInit {
  ans: string[] = []
  radio = []
  check = []
  alf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  Form = this.fb.group({

    input: this.fb.array([''])
  });
  answers: Answer[] = []


  get input() {
    return this.Form.get('input') as FormArray;
  }

  constructor(private fb: FormBuilder) { }
  @Input() answer: string
  @Input() value: string
  ngOnInit() {
  }
  addInput() {
    this.input.push(this.fb.control(''));
  }

  delInput(i: number) {
    this.input.removeAt(i)
  }

  onChange(i) {
    return this.ans[i] = i
  }

  prova() {
    console.log(this.Form)
  }

  resetRadio(i) {
    for(let a=0;a < this.input.length;a++) {
      this.radio[a] = false
    }
    this.radio[i] = true
    console.log(this.radio)
}

  isCheck(i) {
    return this.radio[i] === true ?  true :  false
}

  generateAnswer() {
    for(let a=0;a < this.input.length; a++) {
      if (this.value === 'a') {
        this.answers[a] = {
          value: this.alf[a],
          text: this.Form.value[a],
          correct: (<HTMLInputElement>document.getElementById('a')).checked
        }
      } else {
        this.answers[a] = {
          value: this.alf[a],
          text: this.Form.value[a],
          correct: (<HTMLInputElement>document.getElementById('a')).checked
        }
      }
    }
    return this.answers
  }
}
