import { TodoDTO } from './../../data/dto/TodoDTO';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Todo } from '../../db/model/todo/todo.entity';
import { formatISO } from 'date-fns';

@Injectable()
export class TodoService {
  constructor(
    @Inject('TODO')
    private todoRepository: Repository<Todo>,
  ) {}

  async getAllTasks(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async getTask(id: string): Promise<Todo> {
    return await this.todoRepository.findOne({
      where: {
        id,
      },
    });
  }

  async registerTask(infos: TodoDTO): Promise<Todo> {
    const task = this.todoRepository.create(infos);
    return await this.todoRepository.save(task);
  }

  async updateTask(infos: TodoDTO): Promise<Todo> {
    const task = await this.getTask(infos.id);

    task.lastUpdatedDate = formatISO(new Date());

    this.todoRepository.merge(task, infos);

    return await this.todoRepository.save(task);
  }

  async deleteTask(id: string): Promise<any> {
    return await this.todoRepository.delete(id);
  }
}
