import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionTextComponent } from './new-question-text.component';

describe('NewQuestionTextComponent', () => {
  let component: NewQuestionTextComponent;
  let fixture: ComponentFixture<NewQuestionTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestionTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
