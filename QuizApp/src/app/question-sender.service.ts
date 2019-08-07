import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Answer } from './mockquestions/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionSenderService {
$tag = new BehaviorSubject<string[]>(['']);
$textarea = new BehaviorSubject<string>('');
$answertype = new BehaviorSubject<string>('');
$answers = new BehaviorSubject<Answer[]>([{value: '', text: '', correct: null}])

  constructor() { }


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
  

}
