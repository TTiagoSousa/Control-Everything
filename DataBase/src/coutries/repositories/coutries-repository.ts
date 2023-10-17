import { Prisma, Country } from "@prisma/client";

export interface CoutriesRepository {
  create(data: Prisma.CountryUncheckedCreateInput): Promise<Country>;
}