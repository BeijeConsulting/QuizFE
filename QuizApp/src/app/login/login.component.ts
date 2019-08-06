import { Component, OnInit } from '@angular/core';
import { SidebarService} from '../sidebar.service';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sidebarservice: SidebarService,
              private questionsService: QuestionsService, ) { }

  ngOnInit() {
    this.getQuestions();
    this.sidebarservice.updateAdmin(null);
  }
  setLogin(login: boolean): void {
    this.sidebarservice.updateAdmin(login)
  }
  getQuestions() {
    this.questionsService.getQuestions().subscribe(res => console.log(res))
  }

}
