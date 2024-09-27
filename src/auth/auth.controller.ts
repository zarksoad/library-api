import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginAuthDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiPostOperation } from 'src/common/decorators/swagger';
import { LoginResponseDto } from './dto/login-response.dto';

@ApiTags('login')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }
  @Post('login')
  @ApiPostOperation('login successfully', LoginResponseDto, loginAuthDto, false)
  async LoginUser(@Body() body: loginAuthDto) {
    const { email, password } = body;
    return await this.authService.login({ email, password });
  }
}
