/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { FirebaseAuthGuard } from '../auth/firebase-auth.guard';

@Controller()
@UseGuards(FirebaseAuthGuard)
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  // Fuel
  @Post('fuel')
  createFuel(@Req() req, @Body() body) {
    return this.expensesService.createFuel(req.user.uid, body);
  }

  @Get('fuel')
  getFuel(@Req() req) {
    return this.expensesService.getFuel(req.user.uid);
  }

  // Repair
  @Post('repair')
  createRepair(@Req() req, @Body() body) {
    return this.expensesService.createRepair(req.user.uid, body);
  }

  @Get('repair')
  getRepairs(@Req() req) {
    return this.expensesService.getRepairs(req.user.uid);
  }

  // Service
  @Post('service')
  createService(@Req() req, @Body() body) {
    return this.expensesService.createService(req.user.uid, body);
  }

  @Get('service')
  getServices(@Req() req) {
    return this.expensesService.getServices(req.user.uid);
  }
}
