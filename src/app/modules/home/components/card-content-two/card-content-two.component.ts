import { Component, OnInit } from '@angular/core';

import {
  CARD_CONTENT,
  CardContent,
} from '../../tokens/loading-card-content.token';

@Component({
  selector: 'app-card-content-two',
  templateUrl: './card-content-two.component.html',
  styleUrls: ['./card-content-two.component.scss'],
  providers: [{ provide: CARD_CONTENT, useExisting: CardContentTwoComponent }],
})
export class CardContentTwoComponent implements OnInit, CardContent {
  finishedLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.load();
  }

  refresh(): void {
    this.load();
  }

  load(): void {
    this.finishedLoading = false;

    setTimeout(() => {
      this.finishedLoading = true;
    }, 1000);
  }
}
