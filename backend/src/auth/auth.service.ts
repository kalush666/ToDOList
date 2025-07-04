import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  LoginDto,
  LoginResponseDto,
  SignUpDto,
  SignUpResponseDto,
} from './dto/auth.dto';
import { UserService } from '../user/user.service';
import { UserDocument } from '../user/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { BCRYPT_SALT_ROUNDS } from '../constants/auth.constants';

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

  async signUp(signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    const { firstName, lastName, email, password } = signUpDto;

    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new UnauthorizedException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

    const newUser = await this.userService.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const payload = {
      sub: newUser._id.toString(),
      email: newUser.email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        _id: newUser._id.toString(),
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
    };
  }
}
