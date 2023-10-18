import { Injectable } from '@nestjs/common';
import { signup_dto } from 'src/user/dto/signup.dto';
import { Signup } from './helpers/signup';
import { EmailService } from 'src/email/email.service';
import { JwtService } from '@nestjs/jwt'
import { sendActivationEmail } from './helpers/send.activation.email';
import { activateAccount } from './helpers/activate.account';

@Injectable()
export class AuthService {
  constructor(
    private readonly emailService: EmailService,
    private readonly jwt: JwtService,
  ) {}

  async signup(dto: signup_dto) {
    const result = await Signup(dto, this.jwt, this.emailService);
    return result;
  }

  async sendActivationEmail(email: string, token: string, fullName: string) {
    const result  = await sendActivationEmail(email, token, fullName, this.emailService);
    return result;
  }
  
  async activateAccount(token: string) {
    const result = await activateAccount(this.jwt, token);
    return result;
  }
}
