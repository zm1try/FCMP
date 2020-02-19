import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnChanges {
  @Input() list;
  @Input() totalResults;

  isCanLoadMore;
  sourceList = [];

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges() {
    this.sourceList = this.list.splice(0, this.list.length >= 5 ? 5 : this.list.length);
    this.isCanLoadMore = !!this.list.length;
  }

  loadMore() {
    this.sourceList = this.sourceList.concat(this.list.splice(0, this.list.length >= 5 ? 5 : this.list.length));
    this.isCanLoadMore = !!this.list.length;
  }

  removeByIndex(index) {
    this.sourceList.splice(index, 1);
  }
}
