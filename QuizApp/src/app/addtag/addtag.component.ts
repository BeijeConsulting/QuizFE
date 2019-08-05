import { Component, OnInit } from '@angular/core';
import { QuestionsService} from '../questions.service';
import {Question} from '../mockquestions/question';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-addtag',
  templateUrl: './addtag.component.html',
  styleUrls: ['./addtag.component.scss']
})
export class AddtagComponent implements OnInit {
  questions: Question[];
  tags: string[];
  tags$: Observable<string[]>;
  private searchTerms = new Subject<string>();
  constructor(private qs: QuestionsService) { }

  ngOnInit() {
    this.getTags();
    this.tags$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.qs.searchTag(term)),
    );
  }
  getTags(): void {
    this.qs.getTags().subscribe(res => this.tags = res);
  }
  search(term: string): void {
    this.searchTerms.next(term)
  }
}
