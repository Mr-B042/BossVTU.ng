import { Injectable } from '@nestjs/common';
import { WalletService } from '../wallet/wallet.service';
import { TransactionsService } from '../transactions/transactions.service';

@Injectable()
export class ElectricityService {
  constructor(
    private walletService: WalletService,
    private transactionsService: TransactionsService,
  ) {}

  async pay(userId: string, data: { disco: string; meterNumber: string; meterType: string; amount: number }) {
    const { disco, meterNumber, meterType, amount } = data;

    // Check wallet balance
    const { balance } = await this.walletService.getBalance(userId);
    if (balance < amount) {
      throw new Error('Insufficient wallet balance');
    }

    // Debit wallet
    await this.walletService.debitWallet(userId, amount);

    // TODO: Integrate with electricity provider API (e.g., Buypow or IKEDC API)
    const reference = `ELEC-${Date.now()}`;
    const token = `${Math.random().toString(36).substring(2, 15)}-${Math.random().toString(36).substring(2, 15)}`.toUpperCase();

    // Record transaction
    await this.transactionsService.create({
      userId,
      serviceType: 'electricity',
      amount,
      status: 'completed',
      reference,
      metadata: { disco, meterNumber, meterType, token },
    });

    return {
      success: true,
      message: 'Electricity bill payment successful',
      reference,
      amount,
      meterNumber,
      disco,
      token,
    };
  }
}

