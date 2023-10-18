import { PrismaCountryRepository } from "../repositories/prisma/prisma-coutries-repository";

export async function getCountriesFromDatabaseOrJson(): Promise<any[]> {

  const countriesRepository = new PrismaCountryRepository();
  const countriesFromBanck = await countriesRepository.findAll();

  try {
    return countriesFromBanck;
  } catch (error) {

  }
}