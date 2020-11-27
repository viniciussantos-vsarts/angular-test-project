import { Component, ContentChild, OnInit } from '@angular/core';

import { CARD_CONTENT } from './../../tokens/loading-card-content.token';

@Component({
  selector: 'app-wrapper-card',
  templateUrl: './wrapper-card.component.html',
  styleUrls: ['./wrapper-card.component.scss'],
})
export class WrapperCardComponent implements OnInit {
  @ContentChild(CARD_CONTENT) cardContent: any;

  constructor() {}

  ngOnInit(): void {}

  onRefresh(): void {
    this.cardContent.refresh();
  }
}
