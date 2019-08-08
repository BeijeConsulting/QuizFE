import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionAnswersComponent } from './new-question-answers.component';

describe('NewQuestionAnswersComponent', () => {
  let component: NewQuestionAnswersComponent;
  let fixture: ComponentFixture<NewQuestionAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestionAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
