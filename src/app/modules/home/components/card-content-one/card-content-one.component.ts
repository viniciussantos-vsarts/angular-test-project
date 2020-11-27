import { Component, OnInit } from '@angular/core';

import {
  CARD_CONTENT,
  CardContent,
} from '../../tokens/loading-card-content.token';

@Component({
  selector: 'app-card-content-one',
  templateUrl: './card-content-one.component.html',
  styleUrls: ['./card-content-one.component.scss'],
  providers: [{ provide: CARD_CONTENT, useExisting: CardContentOneComponent }],
})
export class CardContentOneComponent implements OnInit, CardContent {
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
