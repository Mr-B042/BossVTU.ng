import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { TransactionsService } from '../transactions/transactions.service';

@Injectable()
export class AdminService {
  constructor(
    private usersService: UsersService,
    private transactionsService: TransactionsService,
  ) {}

  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  async getAllTransactions() {
    return this.transactionsService.getAllTransactions();
  }

  async getStats() {
    const users = await this.usersService.getAllUsers();
    const transactions = await this.transactionsService.getAllTransactions();

    const totalRevenue = transactions.reduce((sum, t) => sum + Number(t.amount), 0);
    const completedTransactions = transactions.filter(t => t.status === 'completed').length;

    return {
      totalUsers: users.length,
      totalTransactions: transactions.length,
      completedTransactions,
      totalRevenue,
    };
  }
}

