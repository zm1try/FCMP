import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserName = 'Dzmitry Yarash';

  constructor() { }

  getCurrentUserName() {
    return this.currentUserName;
  }

  logOut() {
    this.currentUserName = null;
  }

  logIn() {
    this.currentUserName = 'Dzmitry Yarash';
  }
}
