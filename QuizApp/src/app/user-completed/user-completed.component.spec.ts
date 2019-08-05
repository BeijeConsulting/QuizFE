import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompletedComponent } from './user-completed.component';

describe('UserCompletedComponent', () => {
  let component: UserCompletedComponent;
  let fixture: ComponentFixture<UserCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
