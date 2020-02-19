import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  currentUser;

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.user.getCurrentUserName();
  }

  onClick() {
    if (this.currentUser) {
      this.user.logOut();
      this.currentUser = this.user.getCurrentUserName();
    } else {
      this.user.logIn();
      this.currentUser = this.user.getCurrentUserName();
    }
  }
}
