import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { WrapperCardComponent } from './components/wrapper-card/wrapper-card.component';
import { CardContentOneComponent } from './components/card-content-one/card-content-one.component';
import { CardContentTwoComponent } from './components/card-content-two/card-content-two.component';

@NgModule({
  declarations: [
    HomeComponent,
    WrapperCardComponent,
    CardContentOneComponent,
    CardContentTwoComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
