import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
admin: boolean = null;
quiz: boolean = false;
  constructor(
    private router: Router
  ) { }
  getLogin() {
    // this.router.events.subscribe((val) => {
    //   val instanceof NavigationEnd ? 
    //   (val.url!=='/login'&&this.admin===null ? this.router.navigate(['/login']) : null) : null;
    // });
    window.location.pathname!=='/login'&&this.admin===null ? this.router.navigate(['/login']) : null;
    return this.admin
  }
  updateAdmin(login: boolean) {
    this.admin = login
  }
}

