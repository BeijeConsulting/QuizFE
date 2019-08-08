import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionAnswerInputsComponent } from './new-question-answer-inputs.component';

describe('NewQuestionAnswerInputsComponent', () => {
  let component: NewQuestionAnswerInputsComponent;
  let fixture: ComponentFixture<NewQuestionAnswerInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestionAnswerInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionAnswerInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
