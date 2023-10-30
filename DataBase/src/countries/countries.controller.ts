import { Controller, Post, Get } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly coutriesService: CountriesService) {}

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
