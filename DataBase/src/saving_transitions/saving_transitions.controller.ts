import { Controller, UseGuards, Post, Body, Req } from '@nestjs/common';
import { SavingTransitionsService } from './saving_transitions.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { createSavingTransition_dto } from './dto/create.savings.transition.dto';

@Controller('saving-transitions')
export class SavingTransitionsController {
  constructor(private readonly savingTransitionsService: SavingTransitionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('Create')
  async createSavingTransition(@Req() req: Request, @Body() dto: createSavingTransition_dto) {
    const userId = req.user['id'];
    return this.savingTransitionsService.CreateSavingTransition(dto, userId);
  }
}
