import { InjectionToken } from '@angular/core';

export interface CardContent {
  load: () => void;
  refresh: () => void;
}

export const CARD_CONTENT = new InjectionToken<CardContent>('CARD_CONTENT');
