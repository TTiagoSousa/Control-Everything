import { BadRequestException } from "@nestjs/common";
import { signup_dto } from "src/user/dto/signup.dto";
import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";

export async function Signup (
  dto: signup_dto,
) {

  const usersRepository = new PrismaUsersRepository();
  
  const { email, password, fullName, confirmPassword, dateOfBirth, country, gender } = dto;

  const foundUser = await usersRepository.findByEmail(email);
  if (foundUser) {
    throw new BadRequestException("User already exists");
  }

  if (password !== confirmPassword) {
    throw new BadRequestException("Passwords do not match");
  }

  const user = usersRepository.create({
    email,
    fullName,
    dateOfBirth,
    country,
    hashedPassword: password,
    gender,
  })

  return {user,  message: "User created successfully"} 
}