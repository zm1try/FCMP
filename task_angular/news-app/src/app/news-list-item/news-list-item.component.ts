import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { LocalNewsService } from '../local-news.service';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss']
})
export class NewsListItemComponent implements OnInit, OnChanges {
  @Input() article;
  @Output() onDelete = new EventEmitter<any>();

  constructor(
    private localNews: LocalNewsService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  removeArticle(id) {
    this.localNews.deleteArticle(id);
    this.onDelete.emit();
  }
}
