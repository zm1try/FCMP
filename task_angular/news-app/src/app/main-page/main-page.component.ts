import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service'
import { LocalNewsService } from '../local-news.service';
import { CurrentNewsListService } from '../current-news-list.service';

interface Article {
  author?: string;
  title: string;
  source?: any;
  description?: string;
  content?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  isLocal?: boolean;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  constructor(
    private newsApi: NewsApiService,
    private localNews: LocalNewsService,
    private currentListNews: CurrentNewsListService
  ) { }

  title;
  totalResults;
  filterWordsString;
  sourcesList: Article[] = [];
  articlesList: Article[] = [];
  localArticlesList: Article[] = [];
  listToDisplay: Article[] = [];
  isOnlyLocal;

  ngOnInit(): void {
    this.localArticlesList = this.localNews.getLocalArticles();
    this.listToDisplay = this.localArticlesList.map(item => item);
    this.currentListNews.saveList(this.listToDisplay);
    this.getNewsSources();
  }

  getNewsSources() {
    this.newsApi.getSources()
    .then((response: any) => {
      this.sourcesList = response.sources;
    })
    .catch((error) => {
      console.log(error);
    })
  }

  getNewsArticles(elem) {
    this.title = elem.name;
    this.newsApi.getItems(elem.id)
    .then((response: any) => {
      this.totalResults = response.totalResults;
      this.articlesList = response.articles;
      this.listToDisplay = this.localArticlesList.concat(this.articlesList);
      this.currentListNews.saveList(this.listToDisplay);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  filterListByCheckbox() {
    if (this.isOnlyLocal) {
      this.listToDisplay = this.localArticlesList.map(item => item);
    } else {
      this.listToDisplay = this.localArticlesList.concat(this.articlesList);
    }
    this.currentListNews.saveList(this.listToDisplay);
  }

  setFilterByWord() {
    const input: any = document.getElementById('filter');
    this.filterWordsString = input.value;
  }
}
