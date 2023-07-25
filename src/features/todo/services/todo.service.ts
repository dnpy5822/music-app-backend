import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos: { id: number; title: string; description: string }[] = [
    { id: 1, title: 'dennis', description: 'this is a test' },
  ];

  getTodos() {
    return this.todos;
  }

  createTodo(body) {
    return this.todos.push(body);
  }
}
