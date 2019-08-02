import { Component, OnInit } from '@angular/core';
import { SidebarService} from "../sidebar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sidebarservice: SidebarService) { }

  ngOnInit() {
    this.sidebarservice.updateAdmin(null)
  }
  setLogin(login: boolean): void {
    this.sidebarservice.updateAdmin(login)
  }
}
