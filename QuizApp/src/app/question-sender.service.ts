import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Answer, Question } from './mockquestions/question';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionSenderService {
  questions: Question[]
  question: Question = {
    id: 0,
    tag: [],
    text: '',
    answertype: '',
    answers: [],
  }

  $tag = new BehaviorSubject<string[]>(['']);
  $textarea = new BehaviorSubject<string>('');
  $answertype = new BehaviorSubject<string>('');
  $answers = new BehaviorSubject<Answer[]>([{ value: '', text: '', correct: null }])

  constructor(
    private http: HttpClient
  ) { }

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



  controllo() {
    let check = true
    this.getTag().subscribe(tag => this.question.tag = tag)
    this.getText().subscribe(text => this.question.text = text)
    this.getAnswerType().subscribe(answertype => this.question.answertype = answertype)
    this.getAnswers().subscribe(answers => this.question.answers = answers)
    this.question.answertype === 'textarea' ? this.question.answers = [] : null
    console.log(this.question.answers)
    this.question.tag.length === 0 ? check = false : check = true
    this.question.text === '' ? check = false : check = true
    this.question.answertype === '' ? check = false : check = true
    let checkanswer = false;
    if (this.question.answertype !== 'textarea') {
      for (let i = 0; i < this.question.answers.length; i++) {
        if (this.question.answers[i].text.length) {
          console.log(this.question.answers[i].text.length)
          if (this.question.answers[i].correct) { checkanswer = true }
        } else {
          checkanswer = false
          break
        }
      }
    }


    if (!checkanswer) { check = false }

    return check
  }


  submit() {
    let check = this.controllo()
    if (check === false) {
      window.alert('Controlla i campi inseriti')
      return
    }
    let ok = window.confirm('Carico la domanda?')
    if (ok === true) {
      this.fetch(this.question).subscribe(res => this.load())
      this.emptyQuestion()
    } else {
      return
    }
  }

  update() {
    let check = this.controllo()
    if (check === false) {
      window.alert('Controlla i campi inseriti')
      return
    }
    let ok = window.confirm('Carico la domanda?')
    if (ok === true) {
      this.fetchUpdate(this.question).subscribe(res => this.load())
      this.emptyQuestion()
    } else {
      return
    }
  }


  emptyQuestion() {
    this.question = {
      id: null,
      tag: [''],
      text: '',
      answertype: '',
      answers: [],
    }
    console.log(this.question)
  }

  fetchUpdate(question: Question): Observable<Question> {
    const questionurl = `api/questions/${this.question.id}`
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.put<Question>(questionurl, question, httpHeader)
  }

  fetch(question: Question): Observable<Question> {
    const questionurl = 'api/questions'
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<Question>(questionurl, question, httpHeader)
  }

  load(): void {
    this.http.get<Question[]>('api/questions').subscribe(res => console.log(res));
  }

}
