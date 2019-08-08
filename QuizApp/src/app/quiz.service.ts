import { Injectable } from '@angular/core';
import { Question } from './mockquestions/question';
import { QUESTIONS } from './mockquestions/mock-questions';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private router: Router
  ) { }
  answers: answerQuiz[] = [];

  getQuiz(){
    return this.answers;
  }
  add(answer: answerQuiz) {
    let index = null;
    if (!answer.textarea){
      index = this.answers.indexOf(this.answers.filter(item=>item.id===answer.id&& !item.textarea)[0])
      index===-1 ? this.answers.push(answer) : this.answers[index]=answer
    }
  }
  addArea(answer: answerQuiz) {
    let index = this.answers.indexOf(this.answers.filter(item=>item.id===answer.id)[0])
    index===-1 ? this.answers.push(answer) : this.answers[index]=answer
  }
  getAnswer(id:number,value:string) {
    let correct = false;
    let question = this.answers.filter(answer=>answer.id===id);
    question.length>0 ? question[0].answerValue.map(item=>item===value ? correct=true : correct=correct) : false
    return correct;
  }
  getAnswerArea(id:number){
    let area="";
    let question = this.answers.filter(answer=>answer.id===id);
    question.length>0 ? question[0].answerValue.map(item=>area=item) : area="";
    return area;
  }
  clear() {
    if (confirm("Sei sicuro di inviare il quiz? \nUna volta inviato non potrà più essere modificato.") ) {
      alert(JSON.stringify(this.answers, null, "\t"))
      this.answers = [];
      this.router.navigate(['/user/quiz']);
    }
  }
  getQuestion(id: number): Question {
    return QUESTIONS.filter(item=>item.id===id)[0];
  }
  getTotQuestions(){
    return QUESTIONS.length;
  }
}

export class answerQuiz {
  id: number;
  textarea: boolean;
  answerValue: string[];
}

