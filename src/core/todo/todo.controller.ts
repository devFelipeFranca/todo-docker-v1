import { TodoDTO, TodoRegister } from './../../data/dto/TodoDTO';
import {
  Controller,
  Param,
  Post,
  Put,
  Delete,
  Get,
  Body,
} from '@nestjs/common';

import { TodoService } from './todo.service';

@Controller('/user')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAll(): Promise<TodoRegister[]> {
    return await this.todoService.getAllTasks();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<TodoRegister> {
    return await this.todoService.getTask(id);
  }

  @Post()
  async create(@Body() body: TodoDTO): Promise<TodoRegister> {
    return await this.todoService.registerTask(body);
  }

  @Put()
  async update(@Body() body: TodoDTO): Promise<TodoRegister> {
    return await this.todoService.updateTask(body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<TodoRegister> {
    return await this.todoService.deleteTask(id);
  }
}
