import { Controller, Get } from '@nestjs/common';
import { TodoService } from '../services/todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }
}
