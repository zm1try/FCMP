import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../user.service';
import { LoginButtonComponent } from './login-button.component';

describe('LoginButtonComponent', () => {
  let component: LoginButtonComponent;
  let fixture: ComponentFixture<LoginButtonComponent>;

  const userMock = {
    getCurrentUserName: () => {},
    logOut: () => {},
    logIn: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginButtonComponent ],
      providers: [
        { provide: UserService, useValue: userMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call methods', () => {
      spyOn<any>(component['user'], 'getCurrentUserName');
      component.ngOnInit();
      expect(component['user'].getCurrentUserName).toHaveBeenCalled();
    });
  });

  describe('onClick', () => {
    it('should call methods 1', () => {
      spyOn<any>(component['user'], 'getCurrentUserName');
      spyOn<any>(component['user'], 'logOut');
      spyOn<any>(component['user'], 'logIn');
      component.currentUser = null;
      component.onClick();
      expect(component['user'].logIn).toHaveBeenCalled();
      expect(component['user'].logOut).not.toHaveBeenCalled();
      expect(component['user'].getCurrentUserName).toHaveBeenCalled();
    });

    it('should call methods 2', () => {
      spyOn<any>(component['user'], 'getCurrentUserName');
      spyOn<any>(component['user'], 'logOut');
      spyOn<any>(component['user'], 'logIn');
      component.currentUser = 'some name';
      component.onClick();
      expect(component['user'].logIn).not.toHaveBeenCalled();
      expect(component['user'].logOut).toHaveBeenCalled();
      expect(component['user'].getCurrentUserName).toHaveBeenCalled();
    });
  });
});
