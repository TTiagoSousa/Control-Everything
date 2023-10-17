import { Controller, Get, Param, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getMyUser(@Param() params: { id: string }, @Req() req: Request) {
    return this.userService.getMyUser(params.id, req);
  }
}
