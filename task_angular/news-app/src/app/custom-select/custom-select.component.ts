import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  @Input() list: any[];
  @Input() disabled: boolean;

  @Output() onSelect = new EventEmitter<any>();

  selectedOptionId;

  constructor() { }

  ngOnInit(): void {}

  onChange() {
    const selectedOption = this.list.filter(item => item.id === this.selectedOptionId)[0];
    this.onSelect.emit(selectedOption);
  }
}
