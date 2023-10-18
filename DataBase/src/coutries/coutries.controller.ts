import { Controller, Post, Get } from '@nestjs/common';
import { CoutriesService } from './coutries.service';

@Controller('coutries')
export class CoutriesController {
  constructor(private readonly coutriesService: CoutriesService) {}

  @Post('fetch-data')
  async GetCoutries() {
    await this.coutriesService.GetCoutries();
    return { message: 'Moeda inserida com sucesso' };
  }

  @Get('all')
  async getCountriesData() {
    const countries = await this.coutriesService.GetCoutriesFromDatabaseOrJson();
    return countries;
  }
}
