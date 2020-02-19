import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateEditArticleComponent } from './create-edit-article.component';

describe('CreateEditArticleComponent', () => {
  let component: CreateEditArticleComponent;
  let fixture: ComponentFixture<CreateEditArticleComponent>;

  const routeMock = {
    params: {
      subscribe: () => {}
    }
  };
  const routerMock = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditArticleComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: routeMock },
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
});
