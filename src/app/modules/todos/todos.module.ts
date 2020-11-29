import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { TodosComponent } from './todos.component';
import { TodosService } from './services/todos.service';
import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ],
  providers: [TodosService],
})
export class TodosModule {}
