import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signup_dto } from 'src/user/dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: signup_dto) {

    return this.authService.signup(dto);
  }
}
