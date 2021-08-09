import { Test, TestingModule } from '@nestjs/testing';
import { ArchiveBookService } from './archive-book.service';

describe('ArchiveBookService', () => {
  let service: ArchiveBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArchiveBookService],
    }).compile();

    service = module.get<ArchiveBookService>(ArchiveBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
