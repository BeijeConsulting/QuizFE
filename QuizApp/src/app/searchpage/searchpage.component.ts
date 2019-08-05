import { Component, OnInit } from '@angular/core';
import {Question} from '../mockquestions/question';
import { Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {SearchService} from './search.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})


export class SearchpageComponent implements OnInit {
  questions$: Observable<Question[]>;
  private searchques = new Subject<string>();

  constructor(private searchService: SearchService) { }


  search(term: string): void {
    this.searchques.next(term);

  }


  ngOnInit(): void {
    this.questions$ = this.searchques.pipe(
      debounceTime(200),

      switchMap((term: string) => this.searchService.searchQuestions(term))
    )
  }





}



// <input [(ngModel)]="selectedHero.name" placeholder="name"/> nell'ngModel devi mettere tra apici la categoria degli elemnti che deve prendere
