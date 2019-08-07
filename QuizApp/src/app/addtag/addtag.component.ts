import {Component, Input, OnInit, Output} from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-addtag',
  templateUrl: './addtag.component.html',
  styleUrls: ['./addtag.component.scss']
})

export class AddtagComponent implements OnInit {
  @Input() tagAdded;
  newtags: string[] = [];
  tags: string[];
  searchedTags: string[];
  constructor(private qs: QuestionsService) { }

  ngOnInit() {
    this.getTags();
  }

  getTags(): void {
    this.qs.getTags().subscribe(res => this.tags = res.filter((el) => !this.newtags.includes(el)))
  }
  search(): void {
    if (this.tags) {
      this.searchedTags = this.tags.filter((el) => el.indexOf(this.tagAdded) !== -1);
    }
    console.log(this.tagAdded)
  }
  addNewTag(e: KeyboardEvent) {
   if (e.code === 'Space' || e.code === 'Enter') {
      this.tagAdded = this.tagAdded.replace(/[^a-z0-9]/gi, '');
     if (this.tagAdded && !this.newtags.includes(this.tagAdded)) {
        this.newtags.push(this.tagAdded);
        this.getTags();
      }
     this.tagAdded = '';
    }
  }

  selectTag(defaultTag: string) {
    this.newtags.push(defaultTag);
    this.getTags();
  }

  deleteTag (tag) {
    const index = this.newtags.indexOf(tag);
    this.newtags.splice(index, 1);
    this.getTags();
  }


}
