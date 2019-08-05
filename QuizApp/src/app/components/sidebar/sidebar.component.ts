import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { QUESTIONS } from '../../mockquestions/mock-questions'
import { Router } from '@angular/router'

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
    { path: '/login', title: 'Login', icon: 'person', class: 'person' },
    { path: '/user', title: 'Crea Quiz', icon: 'library_books', class: '' },
    { path: '/user/active', title: 'Riprendi quiz interrotto', icon: 'library_books', class: '' },
    { path: '/user/completed', title: 'Statistiche', icon: 'dashboard', class: 'person' },
    { path: '/user/quiz', title: 'Quiz', icon: 'quiz', class: 'quiz' },
];

export const ROUTESA: RouteInfo[] = [
    { path: '/login', title: 'Login', icon: 'person', class: 'person' },
    { path: '/admin', title: 'Home', icon: 'dashboard', class: 'dashboard' },
    { path: '/admin/new', title: 'Nuova domanda', icon: 'dashboard', class: 'person' },
]

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItemsA: any[];
    menuItemsU: any[];
    menuItemsQ: any[];
    admin: boolean = false;
    quiz: boolean = false;
    constructor(
        private sidebarservice: SidebarService,
        private router: Router
    ) { }

    ngOnInit() {
        this.menuItemsA = ROUTESA.filter(menuItemsA => menuItemsA);
        this.menuItemsU = ROUTESU.filter(menuItemsU => menuItemsU);
        this.menuItemsQ = QUESTIONS.filter(menuItemsQ => menuItemsQ);
    }
    ngOnChanges(router : Router): void {
        console.log(this.router.url)
    }
    getQuiz():boolean {
        this.router.url==='/user/quiz' ? this.updateQuiz(true) : this.updateQuiz(false);
        this.quiz = this.sidebarservice.getQuiz()
        console.log(this.menuItemsQ)
        return this.quiz
    }
    updateQuiz(quiz:boolean):void {
        this.sidebarservice.updateQuiz(quiz)
    }
    getLogin():boolean {
        this.admin = this.sidebarservice.getLogin()
        return this.admin
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
