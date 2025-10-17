import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminService } from './admin.service';

@Controller('admin')
@UseGuards(JwtAuthGuard)
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get('users')
  async getUsers(@Request() req) {
    // TODO: Add admin role guard
    if (req.user.role !== 'admin') {
      throw new Error('Unauthorized');
    }
    return this.adminService.getAllUsers();
  }

  @Get('transactions')
  async getTransactions(@Request() req) {
    if (req.user.role !== 'admin') {
      throw new Error('Unauthorized');
    }
    return this.adminService.getAllTransactions();
  }

  @Get('stats')
  async getStats(@Request() req) {
    if (req.user.role !== 'admin') {
      throw new Error('Unauthorized');
    }
    return this.adminService.getStats();
  }
}

