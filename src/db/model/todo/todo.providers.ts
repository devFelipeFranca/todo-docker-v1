import { DataSource } from 'typeorm';
import { Todo } from './todo.entity';

export const todoProviders = [
  {
    provide: 'TODO',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Todo),
    inject: ['DATA_SOURCE'],
  },
];
