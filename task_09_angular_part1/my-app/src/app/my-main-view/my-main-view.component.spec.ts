import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMainViewComponent } from './my-main-view.component';

describe('MyMainViewComponent', () => {
  let component: MyMainViewComponent;
  let fixture: ComponentFixture<MyMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
