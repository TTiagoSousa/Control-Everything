import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";
import { NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export async function activateAccount(
  jwt: JwtService,
  token: string,
) {

  console.log('The function Start');

  const usersRepository = new PrismaUsersRepository();

  console.log('Repository Pass');

  try {

    console.log("Entrou no try")

    const payload = jwt.verify(token);
  
    const userEmail = payload.email;

    const user = await usersRepository.findByEmail(userEmail);

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    await usersRepository.save({ ...user, isActive: true });
  }catch{
    throw new NotFoundException('Invalid token or error activating account.');
  }
}