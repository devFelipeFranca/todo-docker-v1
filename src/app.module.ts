// import { TodoModule } from './core/todo/todo.model';
import { Module } from '@nestjs/common';
import { TodoModule } from './core/todo/todo.module';
import { UserModule } from './core/user/user.module';

@Module({
  imports: [TodoModule, UserModule],
})
export class AppModule {}
