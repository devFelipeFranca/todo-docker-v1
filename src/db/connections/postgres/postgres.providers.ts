import { DataSource } from 'typeorm';

import { User } from './../../model/user/user.entity';
import { Todo } from '../../model/todo/todo.entity';

export const postgresProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.PG_DB_HOST,
        port: +process.env.PG_DB_PORT,
        database: process.env.PG_DB_NAME,
        username: process.env.PG_DB_USERNAME,
        password: process.env.PG_DB_PASSWORD,
        entities: [Todo, User],
        synchronize: true,
      });

      return dataSource.initialize().then(() => {
        console.log('DATABASE CONNECTED:');
      });
    },
  },
];
