import { Module } from '@nestjs/common';
import { MessagersController } from './messagers.controller';

@Module({
  controllers: [MessagersController]
})
export class MessagersModule {}
