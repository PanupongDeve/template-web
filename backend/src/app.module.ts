import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { MessagersModule } from './module/messagers/messagers.module';

@Module({
  imports: [UsersModule, MessagersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
