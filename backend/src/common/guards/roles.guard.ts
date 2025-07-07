import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLE } from 'src/constants/roles.constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('🔒 RolesGuard: Guard is being executed');

    // Check for role metadata on both method and class level
    const requiredRole = this.reflector.getAllAndOverride<string>(ROLE, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log('🔒 RolesGuard: requiredRole =', requiredRole);

    if (!requiredRole) {
      console.log('🔒 RolesGuard: No required role, allowing access');
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log('🔒 RolesGuard: request.user =', user);

    if (!user) {
      console.log('🔒 RolesGuard: No user found in request, denying access');
      return false;
    }

    const hasRole = user.role === requiredRole;
    console.log('🔒 RolesGuard: User role check - has role:', hasRole);
    console.log(
      '🔒 RolesGuard: User role:',
      user.role,
      'Required role:',
      requiredRole,
    );

    return hasRole;
  }
}
