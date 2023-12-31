import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CountriesModule } from './countries/countries.module';
import { EmailModule } from './email/email.module';
import { SavingTransitionsModule } from './saving_transitions/saving_transitions.module';

@Module({
  imports: [AuthModule, UserModule, CountriesModule, EmailModule, SavingTransitionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}