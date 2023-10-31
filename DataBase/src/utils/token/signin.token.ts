import { Role } from "@prisma/client";
import { jwtSecret } from "../constants"
import { JwtService } from '@nestjs/jwt';


export async function createToken(args: { id: string; email: string; role?: Role }) {
  const payload = args;

  const jwtService = new JwtService();
  const token = await jwtService.signAsync(payload, { secret: jwtSecret, expiresIn: '1m' });
  const refreshToken = await jwtService.signAsync(payload, { secret: jwtSecret, expiresIn: '3m' });
  
  return { token, refreshToken };
}