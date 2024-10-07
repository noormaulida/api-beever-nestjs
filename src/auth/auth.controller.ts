import { Controller, Post, Body, HttpCode, UseGuards, ForbiddenException } from '@nestjs/common';
import { RegisterUserDto } from '../users/dto/register-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { AuthService } from './auth.service';
import { UserExistsFilter } from '../lib/filters/user-exists.filter';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @UseGuards(UserExistsFilter)
  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() loginUserDto: LoginUserDto) {
    const userLoggedIn = await this.authService.login(loginUserDto);
    if (!userLoggedIn) {
      throw new ForbiddenException('Incorrect username or password');
    }
    return userLoggedIn;
  }
}
