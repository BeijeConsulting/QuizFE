import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { QuestionsService} from '../questions.service';
import {Question} from '../mockquestions/question';
import { QuestionSenderService } from '../question-sender.service'
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-addtag',
  templateUrl: './addtag.component.html',
  styleUrls: ['./addtag.component.scss']
})

export class AddtagComponent implements OnInit {
  @Input() tagAdded;
  
  questions: Question[];
  newtags: string[] = [];
  tags: string[];
  searchedTags: string[];
  
  constructor(private qs: QuestionsService,
    private qss: QuestionSenderService) { }

  ngOnInit() {
    this.getTags();
  }

  getTags(): void {
    this.qs.getTags().subscribe(res => this.tags = res.filter((el) => !this.newtags.includes(el)))
  }
  search(term: string): void {
    if (this.tags) {
      this.searchedTags = this.tags.filter((el) => el.indexOf(term) !== -1);
    }
    console.log(this.tagAdded)
  }
  addNewTag(newTag: string, e: KeyboardEvent) {
   if (e.code === 'Space' || e.code === 'Enter') {
      newTag = newTag.replace(/[^a-z0-9]/gi,'');
     if (newTag && !this.newtags.includes(newTag)) {
        this.newtags.push(newTag);
        this.loadTag()
        this.getTags();
      }
     this.tagAdded = '';
    }
  }

  selectTag(defaultTag: string) {
    this.newtags.push(defaultTag);
    this.loadTag()
    this.search('');
    this.getTags();
  }

  deleteTag (tag) {
    const index = this.newtags.indexOf(tag);
    this.newtags.splice(index, 1);
    this.loadTag()
    this.getTags();
  }

  loadTag() {
    this.qss.giveTag(this.newtags)
  }


}
