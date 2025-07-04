import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import {
  JWT_DEFAULT_SECRET,
  JWT_DEFAULT_EXPIRATION,
  JWT_SECRET_ENV_KEY,
  JWT_EXPIRATION_ENV_KEY,
} from '../constants/auth.constants';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret:
          configService.get<string>(JWT_SECRET_ENV_KEY) || JWT_DEFAULT_SECRET,
        signOptions: {
          expiresIn:
            configService.get<string>(JWT_EXPIRATION_ENV_KEY) ||
            JWT_DEFAULT_EXPIRATION,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
