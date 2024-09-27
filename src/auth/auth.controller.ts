import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginAuthDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }
  @Post('login')
  async LoginUser(@Body() body: loginAuthDto) {
    const { email, password } = body;
    return await this.authService.login({ email, password });
  }
}
