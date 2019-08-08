import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Answer, Question } from './mockquestions/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionSenderService {
question: Question = {
  id: 0,
  tag: [''],
  text: '',
  answertype: '',
  answers: [],
}

$tag = new BehaviorSubject<string[]>(['']);
$textarea = new BehaviorSubject<string>('');
$answertype = new BehaviorSubject<string>('');
$answers = new BehaviorSubject<Answer[]>([{value: '', text: '', correct: null}])

  constructor() { }

  getAnswerType(): Observable<string> {
    return this.$answertype.asObservable()
  }

  giveAnswerType(type: string) {
    this.$answertype.next(type)
  }

  getTag(): Observable<string[]> {
    return this.$tag.asObservable()
  }

  giveTag(tag: string[]) {
    this.$tag.next(tag)
  }

  getText(): Observable<string> {
    return this.$textarea.asObservable()
  }

  giveText(text: string) {
    this.$textarea.next(text)
  }

  getAType(): Observable<string> {
    return this.$answertype.asObservable()
  }

  giveAType(answertype: string) {
    this.$answertype.next(answertype)
  }

  getAnswers(): Observable<Answer[]> {
    return this.$answers.asObservable()
  }

  giveAnswers(answers: Answer[]) {
    this.$answers.next(answers)
  }
  submit() {
    this.getTag().subscribe(tag => this.question.tag = tag)
    this.getText().subscribe(text => this.question.text = text)
    this.getAnswerType().subscribe(answertype => this.question.answertype = answertype)
    if (this.question.answertype === 'textarea') {
    this.question.answers = []
    } else {
    this.getAnswers().subscribe(answers => this.question.answers = answers)
    }
    console.warn(this.question)
  }

}
