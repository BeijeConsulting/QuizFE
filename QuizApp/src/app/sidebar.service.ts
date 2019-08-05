import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
admin: boolean = null;
  constructor() { }
  getLogin() {
    return this.admin
  }
  updateAdmin(login: boolean) {
    this.admin = login
  }
}

