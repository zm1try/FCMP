import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NewsApiService } from '../news-api.service';
import { LocalNewsService } from '../local-news.service';
import { CurrentNewsListService } from '../current-news-list.service';
import { MainPageComponent } from './main-page.component';
import { FilterByWordPipe } from '../filter-by-word.pipe';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  const newsApiMock = {
    getSources: () => {},
    getItems: () => {}
  }

  const localNewsMock = {
    getLocalArticles: () => {}
  }

  const currentNewsListMock = {
    saveList: () => {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageComponent, FilterByWordPipe ],
      providers: [
        { provide: NewsApiService, useValue: newsApiMock },
        { provide: LocalNewsService, useValue: localNewsMock },
        { provide: CurrentNewsListService, useValue: currentNewsListMock },
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

  describe('ngOnInit', () => {
    it('should call methods', () => {
      spyOn<any>(component['localNews'], 'getLocalArticles').and.returnValue([{some: 'some'}]);
      spyOn<any>(component['currentListNews'], 'saveList');
      spyOn<any>(component, 'getNewsSources');
      component.ngOnInit();
      expect(component['localNews'].getLocalArticles).toHaveBeenCalled();
      expect(component['currentListNews'].saveList).toHaveBeenCalledWith([{some: 'some'}]);
      expect(component.getNewsSources).toHaveBeenCalled();
    });
  });

  describe('getNewsSources', () => {
    it('should init sourcesList from response', fakeAsync(() => {
      spyOn<any>(component['newsApi'], 'getSources').and.returnValue(Promise.resolve({sources: [{title: 'title'}]}));
      component.getNewsSources();
      tick();
      expect(component['newsApi'].getSources).toHaveBeenCalled();
      expect(component.sourcesList).toEqual( [{title: 'title'}]);
    }));

    it('should not init sourcesList from response', fakeAsync(() => {
      spyOn<any>(component['newsApi'], 'getSources').and.returnValue(Promise.reject({}));
      component.getNewsSources();
      tick();
      expect(component['newsApi'].getSources).toHaveBeenCalled();
      expect(component.sourcesList).toEqual([]);
    }));
  });

  describe('getNewsArticles', () => {
    it('should call methods', fakeAsync(() => {
      spyOn<any>(component['newsApi'], 'getItems').and.returnValue(Promise.resolve({articles: []}));
      spyOn<any>(component['currentListNews'], 'saveList');
      component.getNewsArticles({id: 'id', name: 'name'});
      tick();
      expect(component['newsApi'].getItems).toHaveBeenCalled();
      expect(component['currentListNews'].saveList).toHaveBeenCalled();
    }));

    it('should not call method', fakeAsync(() => {
      spyOn<any>(component['newsApi'], 'getItems').and.returnValue(Promise.reject({}));
      spyOn<any>(component['currentListNews'], 'saveList');
      component.getNewsArticles({id: 'id', name: 'name'});
      tick();
      expect(component['currentListNews'].saveList).not.toHaveBeenCalled();
    }));
  });

  describe('filterListByCheckbox', () => {
    it('should set list 1', () => {
      spyOn<any>(component['currentListNews'], 'saveList');
      component.localArticlesList = [{title: 'local'}];
      component.isOnlyLocal = true;
      component.filterListByCheckbox();
      expect(component['currentListNews'].saveList).toHaveBeenCalledWith([{title: 'local'}]);
      expect(component.listToDisplay).toEqual([{title: 'local'}]);
    });

    it('should set list 2', () => {
      spyOn<any>(component['currentListNews'], 'saveList');
      component.localArticlesList = [{title: 'local'}];
      component.articlesList = [{title: 'local2'}];
      component.isOnlyLocal = false;
      component.filterListByCheckbox();
      expect(component['currentListNews'].saveList).toHaveBeenCalledWith([{title: 'local'}, {title: 'local2'}]);
      expect(component.listToDisplay).toEqual([{title: 'local'}, {title: 'local2'}]);
    });
  });
});
