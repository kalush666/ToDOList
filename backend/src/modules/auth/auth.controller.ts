import { Body, Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as session from 'express-session';
import {
  LoginDto,
  LoginResponseDto,
  SignUpDto,
  SignUpResponseDto,
} from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Request() req,
  ): Promise<LoginResponseDto> {
    const result = await this.authService.login(loginDto);
    req.session.userId = result.user._id;
    req.session.role = result.user.role;
    return result;
  }

  @Post('signup')
  async signUp(
    @Body() signUpDto: SignUpDto,
    @Request() req,
  ): Promise<SignUpResponseDto> {
    const result = await this.authService.signUp(signUpDto);
    req.session.userId = result.user._id;
    req.session.role = result.user.role;
    return result;
  }
}
