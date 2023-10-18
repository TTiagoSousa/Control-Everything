import { BadRequestException } from "@nestjs/common";
import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";
import { signup_dto } from "src/user/dto/signup.dto";
import { getCountriesFromDatabaseOrJson } from "src/coutries/helpers/get.countries.from.data";
import * as Signup_Error from '../../user/errors/Signup.function.errors';

import { 
  hashPassword, 
  isValidEmail, 
  isDisposableEmail, 
  containsOnlyLetters, 
  calculateUserAge, 
  isStrongPassword 
} from "src/utils/all.utilis";

export async function Signup (
  dto: signup_dto,
) {

  const usersRepository = new PrismaUsersRepository();
  
  const { email, password, fullName, confirmPassword, dateOfBirth, country, gender } = dto;

  const foundUser = await usersRepository.findByEmail(email);
  if (foundUser) {
    throw new Signup_Error.Email_Already_Exists();
  }

  if (!isValidEmail(email)) {
    throw new Signup_Error.Email_is_Not_Valid();
  }

  if (isDisposableEmail(email)) {
    throw new Signup_Error.Disposable_Emails();
  }

  if (password !== confirmPassword) {
    throw new Signup_Error.Passwords_Do_Not_Match();
  }

  if (!isStrongPassword(password)) {
    throw new Signup_Error.Weak_Passowrd();
  }

  const userAge = calculateUserAge(new Date(dateOfBirth));
  const minimumAge = 16;
  if (userAge < minimumAge) {
    throw new Signup_Error.Minimum_Age();
  }

  const hashedPassword = await hashPassword(password);

  const capitalizedFullName = fullName
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

  if(!containsOnlyLetters(capitalizedFullName)) {
    throw new Signup_Error.Invalid_Full_Name();
  }

  const coutries = await getCountriesFromDatabaseOrJson();
  const requestedCountry = coutries.find(c => c.countryName === dto.country);

  if (!requestedCountry) {
    throw new Signup_Error.Invalid_Country();
  }

  const user = usersRepository.create({
    email: email,
    fullName: capitalizedFullName,
    dateOfBirth,
    country: requestedCountry.countryName,
    hashedPassword: hashedPassword,
    gender,
  })

  return {user,  message: "User created successfully"} 
}