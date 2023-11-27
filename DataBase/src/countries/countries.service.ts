import { Injectable } from '@nestjs/common';
import { GetCoutries } from './helpers/get.countries';
import { getCountriesFromDatabaseOrJson } from './helpers/get.countries.from.data';
import { DeleteAllCountries } from './helpers/delete.coutries.database';

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

  async DeleteAllCountries() {
    const result = await DeleteAllCountries();
    return result;
  }
}
