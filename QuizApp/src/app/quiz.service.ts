import { Injectable } from '@angular/core';
import { Question } from './mockquestions/question';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(
    private router: Router
  ) { }
  answers: answerQuiz[] = [];
  questions: Question[] = [];
  send: boolean = false;
  counter: number = 0;
  count: number = 0;
  correct: boolean = false;

  getQuiz() {
    return this.answers;
  }
  add(answer: answerQuiz) {
    let index = null;
    if (!answer.textarea) {
      index = this.answers.indexOf(this.answers.find(item => item.id === answer.id && !item.textarea))
      index === -1 ? this.answers.push(answer) : this.answers[index] = answer
    }
  }
  addArea(answer: answerQuiz) {
    let index = this.answers.indexOf(this.answers.find(item => item.id === answer.id))
    index === -1 ? this.answers.push(answer) : this.answers[index] = answer
  }
  getAnswer(id: number, value: string) {
    let correct = false;
    let question = this.answers.find(answer => answer.id === id);
    question ? question.answerValue.map(item => item === value ? correct = true : correct = correct) : false
    return correct;
  }
  getAnswerArea(id: number) {
    let area = "";
    let question = this.answers.find(answer => answer.id === id);
    question ? question.answerValue.map(item => area = item) : area = "";
    return area;
  }
  getAnswered(id: number) {
    let questFind = this.answers.length > 0 ? this.answers.find(item => item.id === id) : null;
    return questFind ? questFind.answerValue.length > 0 && questFind.answerValue[0] != "" : false;
  }
  clear() {
    if (confirm("Sei sicuro di inviare il quiz? \nUna volta inviato non potrà più essere modificato.")) {
      alert(JSON.stringify(this.answers, null, "\t"))
      // this.answers = [];
      // this.counter=0;
      // this.questions=[];
      this.send = true;
      this.router.navigate(['/user/quiz/' + this.getFirstQuest()]);
    }
  }
  addQuiz(questions: Question[]) {
    this.clearQuiz();
    this.counter++;
    this.questions = questions;
  }
  clearQuiz() {
    this.counter = 0;
    this.questions = [];
    this.answers = [];
    this.send = false;
  }
  getResult(id: number) {
    let answ = this.answers.find(i => i.id === id)
    let quest = this.questions.find(i => i.id === id)
    let correct = false;
    let verify = true;
    let count=0;
    quest.answers.map(i => {
      if (i.correct&&answ&&verify) {
        count++;
        if (answ.answerValue.indexOf(i.value) >= 0 ) {
          correct = true;
        } else {
          correct = false;
          verify=false;
        }
      }
    })
    correct = answ ? count===answ.answerValue.length ? correct : false : correct;
    return correct;
  }
  getResults() {
    this.count = 0;
    this.answers.map(answer => {
      this.count = this.getResult(answer.id) ? this.count + 1 : this.count;
    });
    return this.count;
  }
  getSend() {
    return this.send;
  }
  getQuestion(id: number): Question {
    return this.questions.find(item => item.id === id);
  }
  getTotQuestions() {
    return this.questions.length;
  }
  getQuestions() {
    return this.questions;
  }
  getFirstQuest() {
    return this.questions.length > 0 ? this.questions[0].id : null;
  }
  getLastQuest() {
    return this.questions[this.questions.length - 1].id;
  }
  getNextQuest(quest: Question) {
    return this.questions[this.questions.indexOf(quest) + 1].id;
  }
  getPrevQuest(quest: Question) {
    return this.questions[this.questions.indexOf(quest) - 1].id;
  }
}

export class answerQuiz {
  id: number;
  textarea: boolean;
  answerValue: string[];
}

