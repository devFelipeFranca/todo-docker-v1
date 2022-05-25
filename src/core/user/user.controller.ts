import { TodoDTO, TodoRegister } from '../../data/dto/TodoDTO';
import {
  Controller,
  Param,
  Post,
  Put,
  Delete,
  Get,
  Body,
} from '@nestjs/common';

import { UserService } from './user.service';
import { User } from 'src/db/model/user/user.entity';

@Controller('/todo')
export class UserController {
  constructor(private readonly todoService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.todoService.getAllUsers();
  }

  // @Get('/:id')
  // async getById(@Param('id') id: string): Promise<TodoRegister> {
  //   return await this.todoService.getTask(id);
  // }

  @Post()
  async create(@Body() body: User): Promise<User> {
    return await this.todoService.registerUser(body);
  }

  // @Put()
  // async update(@Body() body: TodoDTO): Promise<TodoRegister> {
  //   return await this.todoService.updateTask(body);
  // }

  // @Delete('/:id')
  // async delete(@Param('id') id: string): Promise<TodoRegister> {
  //   return await this.todoService.deleteTask(id);
  // }
}
