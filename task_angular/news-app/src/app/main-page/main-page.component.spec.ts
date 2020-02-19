import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsApiService } from '../news-api.service';
import { MainPageComponent } from './main-page.component';
import { FilterByWordPipe } from '../filter-by-word.pipe';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  const newsApiMock = {
    getSources: () => {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageComponent, FilterByWordPipe ],
      providers: [
        { provide: NewsApiService, useValue: newsApiMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // spyOn<any>(component['newsApi'], 'getSources').and.returnValue(Promise.resolve({}));
    expect(component).toBeTruthy();
  });
});
