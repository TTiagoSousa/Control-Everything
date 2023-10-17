import { Prisma, PrismaClient, Country} from "@prisma/client";
import { CoutriesRepository } from "../coutries-repository";
import { prisma } from '../../../lib/prisma';

export class PrismaCountryRepository implements CoutriesRepository{

  async create(data: Prisma.CountryUncheckedCreateInput) {
    const countries = await prisma.country.create({
      data,
    })
  
    return countries
  }
}