import { Injectable } from '@nestjs/common';
import { signup_dto } from 'src/user/dto/signup.dto';
import { Signup } from './helpers/signup';

@Injectable()
export class AuthService {
  constructor() {}

  async signup(dto: signup_dto) {
    const result = await Signup(dto);
    return result;
  }
  
}
