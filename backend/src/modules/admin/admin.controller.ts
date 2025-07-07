import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role } from 'src/common/decorators/role.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';

@UseGuards(RolesGuard)
@Role('admin')
@Controller('admin')
export class AdminController {
  @Get()
  getAdminData() {
    console.log('Admin data accessed');
    return { message: 'Admin data accessed successfully' };
  }
}
