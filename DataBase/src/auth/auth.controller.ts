import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signup_dto } from 'src/user/dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: signup_dto) {

    return this.authService.signup(dto);
  }

  @Get('activate/:token')
  async activateAccount(@Param('token') token: string) {
    // Chame o método para ativar a conta no serviço de autenticação
    await this.authService.activateAccount(token);

    return { message: 'Account activated successfully' };
  }
}
