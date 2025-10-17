import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { AirtimeService } from './airtime.service';
import { DataService } from './data.service';
import { TVService } from './tv.service';
import { ElectricityService } from './electricity.service';
import { WalletModule } from '../wallet/wallet.module';
import { TransactionsModule } from '../transactions/transactions.module';

@Module({
  imports: [WalletModule, TransactionsModule],
  controllers: [ServicesController],
  providers: [AirtimeService, DataService, TVService, ElectricityService],
})
export class ServicesModule {}

