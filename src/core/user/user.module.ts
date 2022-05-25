import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PostgresModule } from '../../db/connections/postgres/postgres.module';
import { userProviders } from '../../db/model/user/user.providers';
import { UserService } from './user.service';

@Module({
  imports: [PostgresModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
})
export class UserModule {}
