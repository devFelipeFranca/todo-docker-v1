import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../db/model/user/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER')
    private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // async getTask(id: string): Promise<Todo> {
  //   return await this.userRepository.findOne({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  async registerUser(infos: User): Promise<User> {
    const user = this.userRepository.create(infos);
    return await this.userRepository.save(user);
  }

  // async updateTask(infos: TodoDTO): Promise<Todo> {
  //   const task = await this.getTask(infos.id);

  //   task.lastUpdatedDate = formatISO(new Date());

  //   this.userRepository.merge(task, infos);

  //   return await this.userRepository.save(task);
  // }

  // async deleteTask(id: string): Promise<any> {
  //   return await this.userRepository.delete(id);
  // }
}
