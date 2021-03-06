import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'app/mockquestions/question';
import { ActivatedRoute } from '@angular/router';
import { QuizService, answerQuiz } from '../quiz.service'

@Component({
  selector: 'app-user-quiz',
  templateUrl: './user-quiz.component.html',
  styleUrls: ['./user-quiz.component.scss']
})
export class UserQuizComponent implements OnInit {
  question: Question;
  defaultArea: string;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.getQuestion(+routeParams.id);
    });
  }

  getQuestion(id: number): void {
    this.question = this.quizService.getQuestion(id)
  }

  getQuiz(): answerQuiz[] {
    return this.quizService.getQuiz();
  }
  getSend(): boolean {
    return this.quizService.getSend();
  }
  getCorrectAnswer(type: string,correct:boolean) {
    let classe: string = type === 'checkbox' ? 'form-check' : 'form-check form-check-radio';
    if(this.quizService.getSend()&&correct){
      classe+=" correct";
    }
    return classe;
  }
  getResults(){
    return this.quizService.getResults();
  }
  addAnswer(id: number) {
    let answerValue: string[] = [];
    let checkedInput = document.querySelectorAll('input[name="answer"]:checked');
    checkedInput.forEach(input => answerValue.push((<HTMLInputElement>input).value))
    let answer: answerQuiz = { id, answerValue, textarea: false };
    this.quizService.add(answer)
  }
  addAnswerArea(id: number) {
    let answerValue: string[] = [];
    let textareaValue = (<HTMLInputElement>document.getElementById("textarea")).value;
    answerValue.push(textareaValue)
    let answer: answerQuiz = { id, answerValue, textarea: true };
    this.quizService.addArea(answer)
  }
  getDefaultArea(id: number) {
    return this.quizService.getAnswerArea(id)
  }
  getAnswer(id: number, value: string) {
    return this.quizService.getAnswer(id, value);
  }
  getTotQuestions() {
    return this.quizService.getTotQuestions();
  }
  clear() {
    this.quizService.clear();
  }
  getFirstQuestion(id) {
    return this.quizService.getFirstQuest() === id;
  }
  getLastQuestion(id) {
    return this.quizService.getLastQuest() === id;
  }
  getNextQuestion(quest) {
    return this.quizService.getNextQuest(quest)
  }
  getPrevQuestion(quest) {
    return this.quizService.getPrevQuest(quest)
  }
  getFirst() {
    return this.quizService.getFirstQuest()
  }
}
