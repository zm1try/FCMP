import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentNewsListService } from '../current-news-list.service';
import { LocalNewsService } from '../local-news.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  private routeSubscription: Subscription;
  title;
  article;

  @Output() onDelete = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private currentNewsList: CurrentNewsListService,
    private localNews: LocalNewsService
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.title = params['title'];
      if (this.title) {
        this.article = this.currentNewsList.getArticleByTitle(this.title);
      }
    });
  }

  removeArticle(id) {
    this.localNews.deleteArticle(id);
    this.onDelete.emit();
    this.router.navigate(['/']);
  }
}
