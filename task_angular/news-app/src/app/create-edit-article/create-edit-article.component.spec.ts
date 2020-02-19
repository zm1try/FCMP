import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalNewsService } from '../local-news.service';
import { CreateEditArticleComponent } from './create-edit-article.component';

describe('CreateEditArticleComponent', () => {
  let component: CreateEditArticleComponent;
  let fixture: ComponentFixture<CreateEditArticleComponent>;

  const routeMock = {
    params: {
      subscribe: () => {}
    }
  };
  const routerMock = {
    navigate: () => {}
  };
  const localNewsMock = {
    addArticle: () => {},
    updateArticle: () => {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditArticleComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: LocalNewsService, useValue: localNewsMock },
        { provide: Router, useValue: routerMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditArticleComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // onSubmit() {
  //   if (this.isNewArticle) {
  //     this.article.isLocal = true;
  //     console.log(this.article.publishedAt);
  //     this.localNews.addArticle(this.article);
  //   } else {
  //     this.localNews.updateArticle(this.id, this.article);
  //   }
  //   this.router.navigate(['/']);
  // }

  describe('ngOonSubmitnInit', () => {
    it('should call methods 1', () => {
      spyOn<any>(component['localNews'], 'addArticle');
      spyOn<any>(component['localNews'], 'updateArticle');
      spyOn<any>(component['router'], 'navigate');
      component.isNewArticle = true;
      component.onSubmit();
      expect(component['localNews'].addArticle).toHaveBeenCalled();
      expect(component['localNews'].updateArticle).not.toHaveBeenCalled();
      expect(component['router'].navigate).toHaveBeenCalled();
    });

    it('should call methods 2', () => {
      spyOn<any>(component['localNews'], 'addArticle');
      spyOn<any>(component['localNews'], 'updateArticle');
      spyOn<any>(component['router'], 'navigate');
      component.isNewArticle = false;
      component.onSubmit();
      expect(component['localNews'].addArticle).not.toHaveBeenCalled();
      expect(component['localNews'].updateArticle).toHaveBeenCalled();
      expect(component['router'].navigate).toHaveBeenCalled();
    });
  });
});
