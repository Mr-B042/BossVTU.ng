import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class TransactionsService {
  private supabase;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );
  }

  async create(data: {
    userId: string;
    serviceType: string;
    amount: number;
    status: string;
    reference: string;
    metadata?: any;
  }) {
    const { error } = await this.supabase
      .from('transactions')
      .insert([{
        user_id: data.userId,
        service_type: data.serviceType,
        amount: data.amount,
        status: data.status,
        reference: data.reference,
        metadata: data.metadata || {},
      }]);

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  }

  async getUserTransactions(userId: string) {
    const { data } = await this.supabase
      .from('transactions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(100);

    return data || [];
  }

  async getAllTransactions() {
    const { data } = await this.supabase
      .from('transactions')
      .select('*, users(name, email)')
      .order('created_at', { ascending: false })
      .limit(500);

    return data || [];
  }
}

