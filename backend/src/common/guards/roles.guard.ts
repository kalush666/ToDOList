import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ROLE } from 'src/constants/roles.constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const requiredRole = this.reflector.getAllAndOverride<string>(ROLE, [
      context.getHandler(),
      context.getClass(),
    ]);
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      return false;
    }
    console.log('Token extracted:', token);
    try {
      const payload = await this.jwtService.verifyAsync(token);
      console.log('Payload:', payload);
      request.user = payload;
      if (!requiredRole) return true;
      console.log('Required role:', requiredRole);
      return payload.role === requiredRole;
    } catch (error) {
      return false;
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
