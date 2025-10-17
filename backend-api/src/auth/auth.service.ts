import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  private supabase;

  constructor(private jwtService: JwtService) {
    this.supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );
  }

  async register(userData: { email: string; password: string; name: string; phone: string }) {
    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create user in Supabase
    const { data, error } = await this.supabase
      .from('users')
      .insert([
        {
          email: userData.email,
          password_hash: hashedPassword,
          name: userData.name,
          phone: userData.phone,
          role: 'user',
        }
      ])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    // Create wallet for user
    await this.supabase
      .from('wallets')
      .insert([{ user_id: data.id, balance: 0 }]);

    return { message: 'Registration successful', userId: data.id };
  }

  async login(email: string, password: string) {
    // Find user
    const { data: user, error } = await this.supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token
    const payload = { sub: user.id, email: user.email, role: user.role };
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      }
    };
  }

  async validateUser(userId: string) {
    const { data: user } = await this.supabase
      .from('users')
      .select('id, email, name, role')
      .eq('id', userId)
      .single();

    return user;
  }
}

