import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
admin: boolean = false;
quiz: boolean = false;
  constructor() { }
  getLogin() {
    return this.admin
  }
  updateAdmin(login: boolean) {
    this.admin = login
  }
  getQuiz() {
    return this.quiz
  }
  updateQuiz(quiz: boolean) {
    this.quiz = quiz
  }
}

