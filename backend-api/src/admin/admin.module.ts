import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from '../users/users.module';
import { TransactionsModule } from '../transactions/transactions.module';

@Module({
  imports: [UsersModule, TransactionsModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}

