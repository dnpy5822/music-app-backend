import { Module } from '@nestjs/common';
import { CopyTodosController } from './controllers/copy-todos.controller';

@Module({
  imports: [],
  controllers: [CopyTodosController],
  providers: [],
})
export class CopyTodoModule {}
