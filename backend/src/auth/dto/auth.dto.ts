import { IsEmail, isNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Please provide a valid email' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}

export class SignUpDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail({}, { message: 'Please provide a valid email' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}

export class LoginResponseDto {
  accessToken: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export class SignUpResponseDto {
  accessToken: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}
