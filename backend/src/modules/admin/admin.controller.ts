import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Role } from 'src/common/decorators/role.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';

@UseGuards(RolesGuard)
@Role('admin')
@Controller('admin')
export class AdminController {
  @Post()
  @Role('admin')
  seAdmin(userId: string) {}
}
