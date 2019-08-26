import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { QUESTIONS } from '../../mockquestions/mock-questions'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { QuizService } from 'app/quiz.service';

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
    { path: '/user', title: 'Genera Quiz', icon: 'library_books', class: '' },
    //{ path: '/user/active', title: 'Quiz Interrotto', icon: 'library_books', class: '' },
    { path: '/user/completed', title: 'Statistiche', icon: 'dashboard', class: 'person' },
    { path: '/login', title: 'Logout', icon: 'person', class: 'person' },
];

export const ROUTESA: RouteInfo[] = [
    { path: '/admin', title: 'Ricerca Domande', icon: 'dashboard', class: 'dashboard' },
    { path: '/admin/new', title: 'Nuova domanda', icon: 'dashboard', class: 'person' },
    { path: '/login', title: 'Logout', icon: 'person', class: 'person' },
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
    admin: boolean = null;
    quiz: boolean = false;
    url : string;
    constructor(
        private sidebarservice: SidebarService,
        private router: Router,
        private quizService : QuizService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.menuItemsA = ROUTESA.filter(menuItemsA => menuItemsA);
        this.menuItemsU = ROUTESU.filter(menuItemsU => menuItemsU);
        this.router.events.subscribe((val) => {
            val instanceof NavigationEnd ? 
            (val.url.indexOf('/user/quiz')===0 ? 
            this.setQuiz() : this.clearQuiz() ) : this.quiz=false;
        });
    }
    setQuiz(){
        this.quiz=true;
        this.menuItemsQ = this.quizService.getQuestions();     
    }
    getSend(){
        return this.quizService.getSend();     
    }
    clearQuiz(){
        this.quiz=false;
        this.menuItemsQ = [];
        this.quizService.clearQuiz();        
    }
    getResult(id:number){
        return this.quizService.getResult(id);
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
    getAnswered(id:number){
        return this.quizService.getAnswered(id)
    }
    clear(){
        this.quizService.clear();
    }
}
