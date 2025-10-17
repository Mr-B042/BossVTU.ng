import { Injectable } from '@nestjs/common';
import { WalletService } from '../wallet/wallet.service';
import { TransactionsService } from '../transactions/transactions.service';

@Injectable()
export class TVService {
  constructor(
    private walletService: WalletService,
    private transactionsService: TransactionsService,
  ) {}

  // Package pricing (sample)
  private packagePrices = {
    'DStv': { 'DStv Compact': 10500, 'DStv Premium': 24500, 'DStv Confam': 6200 },
    'GOtv': { 'GOtv Jinja': 3300, 'GOtv Jolli': 2800, 'GOtv Max': 4850 },
    'Startimes': { 'Basic': 2100, 'Smart': 3200, 'Classic': 3800 },
  };

  async subscribe(userId: string, data: { provider: string; smartCardNumber: string; package: string }) {
    const { provider, smartCardNumber, package: pkg } = data;

    // Get package price
    const amount = this.packagePrices[provider]?.[pkg];
    if (!amount) {
      throw new Error('Invalid package');
    }

    // Check wallet balance
    const { balance } = await this.walletService.getBalance(userId);
    if (balance < amount) {
      throw new Error('Insufficient wallet balance');
    }

    // Debit wallet
    await this.walletService.debitWallet(userId, amount);

    // TODO: Integrate with cable TV provider API
    const reference = `TV-${Date.now()}`;

    // Record transaction
    await this.transactionsService.create({
      userId,
      serviceType: 'cable_tv',
      amount,
      status: 'completed',
      reference,
      metadata: { provider, smartCardNumber, package: pkg },
    });

    return {
      success: true,
      message: 'Cable TV subscription successful',
      reference,
      amount,
      smartCardNumber,
      provider,
      package: pkg,
    };
  }
}

