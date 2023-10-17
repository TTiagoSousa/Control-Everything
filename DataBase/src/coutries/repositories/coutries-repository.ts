import { Prisma, Country } from "@prisma/client";

export interface CoutriesRepository {
  create(data: Prisma.CountryUncheckedCreateInput): Promise<Country>;
  findByName(countryName: string): Promise<Country>;
  updateCountries(countryName: string, coutryFlag: string): Promise<Country>;
}