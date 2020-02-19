import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalNewsService } from '../local-news.service'
import { Subscription } from 'rxjs';
import { UserService } from '../user.service'

@Component({
  selector: 'app-create-edit-article',
  templateUrl: './create-edit-article.component.html',
  styleUrls: ['./create-edit-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEditArticleComponent implements OnInit {

  private routeSubscription: Subscription;
  id;
  isNewArticle;
  article: any = {};
  articleForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    content: new FormControl(''),
    urlToImage: new FormControl(''),
    publishedAt: new FormControl(''),
    author: new FormControl(''),
    url: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localNews: LocalNewsService,
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.article = this.localNews.getArticle(this.id);
      }
      this.article.publishedAt = this.article.publishedAt || (new Date()).toISOString();
      this.article.author = this.article.author || this.user.getCurrentUserName();
    });
    this.isNewArticle = this.router.url === '/create-article';
  }

  onSubmit() {
    if (this.isNewArticle) {
      this.article.isLocal = true;
      console.log(this.article.publishedAt);
      this.localNews.addArticle(this.article);
    } else {
      this.localNews.updateArticle(this.id, this.article);
    }
    this.router.navigate(['/']);
  }

}
