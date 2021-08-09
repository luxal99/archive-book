import { Test, TestingModule } from '@nestjs/testing';
import { ArchiveBookController } from './archive-book.controller';
import { ArchiveBookService } from './archive-book.service';

describe('ArchiveBookController', () => {
  let controller: ArchiveBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArchiveBookController],
      providers: [ArchiveBookService],
    }).compile();

    controller = module.get<ArchiveBookController>(ArchiveBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
