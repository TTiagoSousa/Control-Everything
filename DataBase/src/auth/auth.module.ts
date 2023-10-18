import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CoutriesModule } from 'src/coutries/coutries.module';
import { CoutriesService } from 'src/coutries/coutries.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from 'src/utils/constants';

@Module({
  imports: [
    CoutriesModule,
    PassportModule,
    JwtModule.register({
      secret: jwtSecret, // Replace with your actual secret key
      signOptions: { expiresIn: '1d' }, // Token expiration
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, CoutriesService],
})
export class AuthModule {}
