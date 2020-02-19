import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.scss']
})
export class LoadMoreButtonComponent {

  @Output() onLoadMore = new EventEmitter<any>();

  constructor() { }

  onClick() {
    this.onLoadMore.emit();
  }

}
