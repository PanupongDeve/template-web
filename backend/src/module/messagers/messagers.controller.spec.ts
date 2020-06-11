import { Test, TestingModule } from '@nestjs/testing';
import { MessagersController } from './messagers.controller';

describe('Messagers Controller', () => {
  let controller: MessagersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagersController],
    }).compile();

    controller = module.get<MessagersController>(MessagersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
