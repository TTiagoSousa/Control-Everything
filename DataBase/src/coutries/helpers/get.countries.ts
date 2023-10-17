import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaCountryRepository } from '../repositories/prisma/prisma-coutries-repository';

export async function GetCoutries() {
  const apiUrl: string = process.env.Countries_Api;
  const countriesRepository = new PrismaCountryRepository();

  try {
    // Fetch data from the API
    const response = await axios.get(apiUrl);
    
    // Process the data and filter out falsy values
    const countries = response.data.map((country: any) => {
      return {
        name: country.name.common,
        flag: country.flags[1],
      };
    }).filter(Boolean);

    // Define the path for the JSON file
    const jsonFilePath = path.join(__dirname, '..', '..', '..', 'src', 'coutries', 'jsons', 'countries.json');
    
    // Write the JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(countries, null, 2), 'utf-8');
    
    // Loop through countries and interact with the database
    for (const country of countries) {
      const existingCountry = await countriesRepository.findByName(country.name);
      if (existingCountry) {
        await countriesRepository.updateCountries(existingCountry.countryName, country.flag);
      } else {
        await countriesRepository.create({
          countryName: country.name,
          CoutryFlag: country.flag,
        });
      }
    }

  } catch (error) {
    console.error('Error fetching or processing countries:', error);
  }
}