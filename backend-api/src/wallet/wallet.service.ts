import { Injectable, BadRequestException } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class WalletService {
  private supabase;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );
  }

  async getBalance(userId: string) {
    const { data } = await this.supabase
      .from('wallets')
      .select('balance')
      .eq('user_id', userId)
      .single();
    
    return { balance: data?.balance || 0 };
  }

  async fundWallet(userId: string, amount: number, reference: string) {
    // Get current balance
    const { data: wallet } = await this.supabase
      .from('wallets')
      .select('balance')
      .eq('user_id', userId)
      .single();

    const newBalance = (wallet?.balance || 0) + amount;

    // Update wallet
    await this.supabase
      .from('wallets')
      .update({ balance: newBalance, updated_at: new Date() })
      .eq('user_id', userId);

    // Record transaction
    await this.supabase
      .from('transactions')
      .insert([{
        user_id: userId,
        service_type: 'wallet_funding',
        amount,
        status: 'completed',
        reference,
      }]);

    return { balance: newBalance, message: 'Wallet funded successfully' };
  }

  async debitWallet(userId: string, amount: number) {
    const { data: wallet } = await this.supabase
      .from('wallets')
      .select('balance')
      .eq('user_id', userId)
      .single();

    if (!wallet || wallet.balance < amount) {
      throw new BadRequestException('Insufficient balance');
    }

    const newBalance = wallet.balance - amount;

    await this.supabase
      .from('wallets')
      .update({ balance: newBalance, updated_at: new Date() })
      .eq('user_id', userId);

    return { balance: newBalance };
  }

  async getTransactions(userId: string) {
    const { data } = await this.supabase
      .from('transactions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(50);

    return data || [];
  }
}

