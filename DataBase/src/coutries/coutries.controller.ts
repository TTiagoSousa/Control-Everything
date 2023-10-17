import { Controller } from '@nestjs/common';
import { CoutriesService } from './coutries.service';

@Controller('coutries')
export class CoutriesController {
  constructor(private readonly coutriesService: CoutriesService) {}
}
