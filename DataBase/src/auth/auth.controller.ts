import { Controller, Post, Body, Get, Param, BadRequestException } from '@nestjs/common';
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

  @Post('reset-password')
  async sendPasswordResetEmail(@Body('email') email: string) {

   await this.authService.sendResetPasswordEmail(email)

    return { message: 'Email to reset password send' };
  }

  @Post('reset-password/:token')
  async resetPassword(@Param('token') token: string, @Body('newPassword') newPassword: string) {
    try {
      await this.authService.resetPassword(token, newPassword);
      return { message: 'Password reset successfully' };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error; 
      }

      throw new BadRequestException('Invalid token or error resetting password.');
    }
  }
}
