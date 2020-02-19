import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentNewsListService {

  currentNewsList;

  constructor() { }

  saveList(list) {
    this.currentNewsList = list;
  }

  getArticleByTitle(title) {
    return this.currentNewsList.find(item => item.title === title);
  }
}
