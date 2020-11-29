import { Component, OnInit } from '@angular/core';

import { Todos } from './models/todos.model';
import { MessageService } from 'src/infra/services/message.service';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todos[] = [];
  finishedLoading: boolean = false;
  itemsPerPage: number = 6;
  currentPage: number = 1;

  constructor(
    private readonly todosService: TodosService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.todosService
      .getAll()
      .subscribe(
        (res) => this.successGetAll(res),
        (err) => this.messageService.error(err)
      )
      .add(() => (this.finishedLoading = true));
  }

  successGetAll(res: Todos[]): void {
    if (!res) {
      res = [];
    }
    this.todos = res;
  }
}
