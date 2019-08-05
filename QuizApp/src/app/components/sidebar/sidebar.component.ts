import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../../sidebar.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
// { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
// { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
// { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
// { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
// { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
// { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
// { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
// { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
export const ROUTESU: RouteInfo[] = [
    { path: '/login', title: 'Login',  icon: 'person', class: 'person' },
    { path: '/user', title: 'Crea Quiz', icon: 'library_books', class: ''},
    { path: '/user/active', title: 'Riprendi quiz interrotto',  icon: 'dashboard', class: 'person' },
    { path: '/user/completed', title: 'Statistiche',  icon: 'dashboard', class: 'person' },
    { path: '/user/quiz', title: 'Quiz',  icon: 'quiz', class: 'quiz' },
];

export const ROUTESA: RouteInfo[] = [
    { path: '/login', title: 'Login',  icon: 'person', class: 'person' },
    { path: '/admin', title: 'Home', icon: 'dashboard', class: 'dashboard'},
    { path: '/admin/new', title: 'Nuova domanda',  icon: 'dashboard', class: 'person' },
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItemsA: any[];
  menuItemsU: any[];
  admin: boolean = null
  constructor(private sidebarservice: SidebarService) { }

  ngOnInit() {
    this.menuItemsA = ROUTESA.filter(menuItemsA => menuItemsA);
    this.menuItemsU = ROUTESU.filter(menuItemsU => menuItemsU);
  }


  getLogin() {
      this.admin = this.sidebarservice.getLogin()
      console.log(this.admin)
      return this.admin
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
