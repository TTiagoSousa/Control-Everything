import { BadRequestException } from "@nestjs/common";
import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";
import { signup_dto } from "src/user/dto/signup.dto";
import { hashPassword } from "src/utils/all.utilis";

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

  const hashedPassword = await hashPassword(password);

  const user = usersRepository.create({
    email,
    fullName,
    dateOfBirth,
    country,
    hashedPassword: hashedPassword,
    gender,
  })

  return {user,  message: "User created successfully"} 
}