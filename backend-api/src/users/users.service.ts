import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class UsersService {
  private supabase;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );
  }

  async findByEmail(email: string) {
    const { data } = await this.supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
    return data;
  }

  async findById(id: string) {
    const { data } = await this.supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    return data;
  }

  async getAllUsers() {
    const { data } = await this.supabase
      .from('users')
      .select('id, email, name, phone, role, created_at')
      .order('created_at', { ascending: false });
    return data;
  }
}

