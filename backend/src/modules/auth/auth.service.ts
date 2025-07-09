import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  LoginDto,
  LoginResponseDto,
  SignUpDto,
  SignUpResponseDto,
} from './dto/auth.dto';
import { UserService } from '../user/user.service';
import { UserDocument } from '../user/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

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
    const paylod = { sub: userDoc._id.toString(), role: userDoc.role };
    const accessToken = await this.jwtService.signAsync(paylod);

    return {
      user: {
        _id: userDoc._id.toString(),
        firstName: userDoc.firstName,
        lastName: userDoc.lastName,
        email: userDoc.email,
        role: userDoc.role,
      },
      access_token: accessToken,
    };
  }

  async signUp(signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    const { firstName, lastName, email, password } = signUpDto;

    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new UnauthorizedException('Email already exists');
    }

    const newUser = await this.userService.create({
      firstName,
      lastName,
      email,
      password,
    });
    newUser.role;

    const paylod = { sub: newUser._id.toString(), role: newUser.role };
    const accessToken = await this.jwtService.signAsync(paylod);

    return {
      user: {
        _id: newUser._id.toString(),
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role,
      },
      access_token: accessToken,
    };
  }
}
