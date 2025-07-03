import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, LoginResponseDto } from './dto/auth.dto';
import { UserService } from '../user/user.service';
import { UserDocument } from '../user/interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { email, password } = loginDto;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const userDoc = user as UserDocument;

    const payload = {
      sub: userDoc._id.toString(),
      email: userDoc.email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        _id: userDoc._id.toString(),
        firstName: userDoc.firstName,
        lastName: userDoc.lastName,
        email: userDoc.email,
      },
    };
  }
}
