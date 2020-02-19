import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

describe('NewsApiService', () => {
  let service: NewsApiService;

  const httpMock = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpMock },
      ]
    });
    service = TestBed.inject(NewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
