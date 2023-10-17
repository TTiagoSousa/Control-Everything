import { Controller, Post } from '@nestjs/common';
import { CoutriesService } from './coutries.service';

@Controller('coutries')
export class CoutriesController {
  constructor(private readonly coutriesService: CoutriesService) {}

  @Post('fetch-data')
  async GetCoutries() {
    await this.coutriesService.GetCoutries();
    return { message: 'Moeda inserida com sucesso' };
  }

}
