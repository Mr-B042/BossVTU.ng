import { Injectable } from '@nestjs/common';
import { WalletService } from '../wallet/wallet.service';
import { TransactionsService } from '../transactions/transactions.service';

@Injectable()
export class AirtimeService {
  constructor(
    private walletService: WalletService,
    private transactionsService: TransactionsService,
  ) {}

  async purchase(userId: string, data: { network: string; phone: string; amount: number }) {
    const { network, phone, amount } = data;

    // Check wallet balance
    const { balance } = await this.walletService.getBalance(userId);
    if (balance < amount) {
      throw new Error('Insufficient wallet balance');
    }

    // Debit wallet
    await this.walletService.debitWallet(userId, amount);

    // TODO: Integrate with actual VTU provider API (e.g., ClubKonnect, Shago, etc.)
    const reference = `AIR-${Date.now()}`;

    // Record transaction
    await this.transactionsService.create({
      userId,
      serviceType: 'airtime',
      amount,
      status: 'completed',
      reference,
      metadata: { network, phone },
    });

    return {
      success: true,
      message: 'Airtime purchase successful',
      reference,
      amount,
      phone,
      network,
    };
  }
}

