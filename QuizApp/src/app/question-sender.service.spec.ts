import { TestBed } from '@angular/core/testing';

import { QuestionSenderService } from './question-sender.service';

describe('QuestionSenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionSenderService = TestBed.get(QuestionSenderService);
    expect(service).toBeTruthy();
  });
});
