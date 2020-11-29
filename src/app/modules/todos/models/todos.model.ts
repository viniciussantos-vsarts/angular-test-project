export class Todos {
  id?: number;
  title: string;
  completed: boolean;
  userId: number;

  constructor(todos: Todos) {
    this.id = todos.id;
    this.title = todos.title;
    this.completed = todos.completed;
    this.userId = todos.userId;
  }
}
