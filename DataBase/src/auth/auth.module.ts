import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CoutriesModule } from 'src/coutries/coutries.module';
import { CoutriesService } from 'src/coutries/coutries.service';

@Module({
  imports: [CoutriesModule],
  controllers: [AuthController],
  providers: [AuthService, CoutriesService],
})
export class AuthModule {}
