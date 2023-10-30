import { Injectable } from '@nestjs/common';
import { GetCoutries } from './helpers/get.countries';
import { getCountriesFromDatabaseOrJson } from './helpers/get.countries.from.data';

@Injectable()
export class CountriesService {

  async GetCoutries() {
    const result = await GetCoutries();
    return result;
  }

  async GetCoutriesFromDatabaseOrJson() {
    const result = await getCountriesFromDatabaseOrJson();
    return result;
  }
}
