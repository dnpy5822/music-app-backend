import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { TodoService } from 'src/features/todo/services/todo.service';

@Controller('create')
export class CopyTodosController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  async addTodo(
    @Body() body: { id: number; title: string; description: string },
  ) {
    await this.todoService.createTodo(body);
    return HttpStatus.ACCEPTED;
  }
}
