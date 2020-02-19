import { TestBed } from '@angular/core/testing';

import { CurrentNewsListService } from './current-news-list.service';

describe('CurrentNewsListService', () => {
  let service: CurrentNewsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentNewsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
