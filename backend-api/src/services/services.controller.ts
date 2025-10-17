import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AirtimeService } from './airtime.service';
import { DataService } from './data.service';
import { TVService } from './tv.service';
import { ElectricityService } from './electricity.service';

@Controller()
@UseGuards(JwtAuthGuard)
export class ServicesController {
  constructor(
    private airtimeService: AirtimeService,
    private dataService: DataService,
    private tvService: TVService,
    private electricityService: ElectricityService,
  ) {}

  @Post('airtime/buy')
  async buyAirtime(@Request() req, @Body() body: { network: string; phone: string; amount: number }) {
    return this.airtimeService.purchase(req.user.id, body);
  }

  @Post('data/buy')
  async buyData(@Request() req, @Body() body: { network: string; phone: string; plan: string }) {
    return this.dataService.purchase(req.user.id, body);
  }

  @Post('tv/pay')
  async payTV(@Request() req, @Body() body: { provider: string; smartCardNumber: string; package: string }) {
    return this.tvService.subscribe(req.user.id, body);
  }

  @Post('electricity/pay')
  async payElectricity(@Request() req, @Body() body: { disco: string; meterNumber: string; meterType: string; amount: number }) {
    return this.electricityService.pay(req.user.id, body);
  }
}

