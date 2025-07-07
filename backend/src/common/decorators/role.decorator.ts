import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ROLE } from 'src/constants/roles.constants';

export function Role(role: string) {
  return applyDecorators(SetMetadata(ROLE, role));
}
