import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-question-answer-inputs',
  templateUrl: './new-question-answer-inputs.component.html',
  styleUrls: ['./new-question-answer-inputs.component.scss']
})
export class NewQuestionAnswerInputsComponent implements OnInit {
  ans: string[] = []
  check = []
  Form = this.fb.group({

    input: this.fb.array([''])
  });
  
  get input() {
    return this.Form.get('input') as FormArray;
  }

  constructor(private fb: FormBuilder) { }
  @Input() answer: string
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
      this.check[a] = false
    }
    this.check[i] = true
    console.log(this.check)
}

  isCheck(i) {
    return this.check[i] === true ?  true :  false
}
}
