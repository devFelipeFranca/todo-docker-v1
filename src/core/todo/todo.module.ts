import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { PostgresModule } from '../../db/connections/postgres/postgres.module';
import { todoProviders } from '../../db/model/todo/todo.providers';
import { TodoService } from './todo.service';

@Module({
  imports: [PostgresModule],
  controllers: [TodoController],
  providers: [...todoProviders, TodoService],
})
export class TodoModule {}
