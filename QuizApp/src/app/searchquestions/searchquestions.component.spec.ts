import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchquestionsComponent } from './searchquestions.component';

describe('SearchquestionsComponent', () => {
  let component: SearchquestionsComponent;
  let fixture: ComponentFixture<SearchquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
