import { Controller } from '@nestjs/common';
import { ArchiveBookService } from './archive-book.service';

@Controller('archive-book')
export class ArchiveBookController {
  constructor(private readonly archiveBookService: ArchiveBookService) {}
}
