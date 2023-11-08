import { Controller } from '@nestjs/common';
import { SavingTransitionsService } from './saving_transitions.service';

@Controller('saving-transitions')
export class SavingTransitionsController {
  constructor(private readonly savingTransitionsService: SavingTransitionsService) {}
}
