import { Injectable } from '@nestjs/common';
import { WalletService } from '../wallet/wallet.service';
import { TransactionsService } from '../transactions/transactions.service';

@Injectable()
export class DataService {
  constructor(
    private walletService: WalletService,
    private transactionsService: TransactionsService,
  ) {}

  // Data plan pricing (sample)
  private dataPrices = {
    MTN: { '500MB': 200, '1GB': 350, '2GB': 700, '5GB': 1500 },
    Airtel: { '750MB': 250, '1.5GB': 500, '3GB': 1000, '10GB': 3000 },
    Glo: { '1GB': 300, '2.5GB': 750, '5.8GB': 1500, '10GB': 2500 },
    '9mobile': { '1GB': 400, '2GB': 800, '5GB': 1800, '15GB': 4500 },
  };

  async purchase(userId: string, data: { network: string; phone: string; plan: string }) {
    const { network, phone, plan } = data;

    // Get plan price
    const amount = this.dataPrices[network]?.[plan];
    if (!amount) {
      throw new Error('Invalid data plan');
    }

    // Check wallet balance
    const { balance } = await this.walletService.getBalance(userId);
    if (balance < amount) {
      throw new Error('Insufficient wallet balance');
    }

    // Debit wallet
    await this.walletService.debitWallet(userId, amount);

    // TODO: Integrate with VTU provider
    const reference = `DATA-${Date.now()}`;

    // Record transaction
    await this.transactionsService.create({
      userId,
      serviceType: 'data',
      amount,
      status: 'completed',
      reference,
      metadata: { network, phone, plan },
    });

    return {
      success: true,
      message: 'Data purchase successful',
      reference,
      amount,
      phone,
      network,
      plan,
    };
  }
}

