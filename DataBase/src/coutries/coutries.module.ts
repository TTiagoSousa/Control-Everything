import { Module } from '@nestjs/common';
import { CoutriesService } from './coutries.service';
import { CoutriesController } from './coutries.controller';

@Module({
  controllers: [CoutriesController],
  providers: [CoutriesService],
})
export class CoutriesModule {}
