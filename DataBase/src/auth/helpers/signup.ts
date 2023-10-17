import { BadRequestException } from "@nestjs/common";
import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";
import { signup_dto } from "src/user/dto/signup.dto";
import { hashPassword, isValidEmail, isDisposableEmail, containsOnlyLetters, calculateUserAge } from "src/utils/all.utilis";

export async function Signup (
  dto: signup_dto,
) {

  const usersRepository = new PrismaUsersRepository();
  
  const { email, password, fullName, confirmPassword, dateOfBirth, country, gender } = dto;

  const foundUser = await usersRepository.findByEmail(email);
  if (foundUser) {
    throw new BadRequestException("User already exists");
  }

  if (!isValidEmail(email)) {
    throw new BadRequestException("Invalid email");
  }

  if (isDisposableEmail(email)) {
    throw new BadRequestException("Email is not allowed");
  }

  if (password !== confirmPassword) {
    throw new BadRequestException("Passwords do not match");
  }

  const userAge = calculateUserAge(new Date(dateOfBirth));
  const minimumAge = 16;
  if (userAge < minimumAge) {
    throw new BadRequestException(`You must be at least ${minimumAge} years old`);
  }

  const hashedPassword = await hashPassword(password);

  const capitalizedFullName = fullName
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

  if(!containsOnlyLetters(capitalizedFullName)) {
    throw new BadRequestException("Invalid name");
  }

  const user = usersRepository.create({
    email: email,
    fullName: capitalizedFullName,
    dateOfBirth,
    country,
    hashedPassword: hashedPassword,
    gender,
  })

  return {user,  message: "User created successfully"} 
}