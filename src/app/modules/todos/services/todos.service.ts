import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { JSONPlaceholder } from 'src/infra/system/constant';
import { Todos } from '../models/todos.model';

@Injectable()
export class TodosService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Todos[]> {
    return this.http.get<Todos[]>(JSONPlaceholder.TODOS).pipe(take(1));
  }

  get(id: number): Observable<Todos> {
    return this.http.get<Todos>(`${JSONPlaceholder.TODOS}/${id}`).pipe(take(1));
  }
}
