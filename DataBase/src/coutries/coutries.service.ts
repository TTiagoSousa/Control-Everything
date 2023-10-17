import { Injectable } from '@nestjs/common';
import { GetCoutries } from './helpers/get.countries';

@Injectable()
export class CoutriesService {

  async GetCoutries() {
    const result = await GetCoutries();
    return result;
  }

}
