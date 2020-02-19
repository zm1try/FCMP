import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalNewsService {
  localArticles = [{
    id: 'id1',
    title: 'Mock local article',
    description: 'some text',
    content: 'more text',
    publishedAt: '2020-02-10T14:58:00Z',
    author: 'Some Author',
    urlToImage: 'https://i.ytimg.com/vi/P172dFjf2nM/maxresdefault.jpg',
    isLocal: true
  }];

  lastId = 1;

  constructor() { }

  getLocalArticles() {
    return this.localArticles;
  }

  deleteArticle(id) {
    const index = this.localArticles.findIndex(item => item.id === id);
    this.localArticles.splice(index, 1);
  }

  addArticle(article) {
    article.id = `id${++this.lastId}`;
    this.localArticles.push(article);
  }

  getArticle(id) {
    return this.localArticles.find(item => item.id === id);
  }

  updateArticle(id, article) {
    const index = this.localArticles.findIndex(item => item.id === id);
    this.localArticles[index] = article;
  }
}
