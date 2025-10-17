import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { WalletService } from './wallet.service';

@Controller('wallet')
@UseGuards(JwtAuthGuard)
export class WalletController {
  constructor(private walletService: WalletService) {}

  @Get('balance')
  async getBalance(@Request() req) {
    return this.walletService.getBalance(req.user.id);
  }

  @Post('fund')
  async fundWallet(@Request() req, @Body() body: { amount: number; reference: string }) {
    return this.walletService.fundWallet(req.user.id, body.amount, body.reference);
  }

  @Get('transactions')
  async getTransactions(@Request() req) {
    return this.walletService.getTransactions(req.user.id);
  }
}

