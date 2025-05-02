import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FuelExpense } from './schemas/fuel-expense.schema';
import { RepairLog } from './schemas/repair-log.schema';
import { ServiceLog } from './schemas/service-log.schema';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(FuelExpense.name) private fuelModel: Model<FuelExpense>,
    @InjectModel(RepairLog.name) private repairModel: Model<RepairLog>,
    @InjectModel(ServiceLog.name) private serviceModel: Model<ServiceLog>,
  ) {}

  // Fuel
  async createFuel(userId: string, dto: any) {
    return this.fuelModel.create({ ...dto, userId });
  }

  async getFuel(userId: string) {
    return this.fuelModel.find({ userId }).sort({ date: -1 }).exec();
  }

  // Repair
  async createRepair(userId: string, dto: any) {
    return this.repairModel.create({ ...dto, userId });
  }

  async getRepairs(userId: string) {
    return this.repairModel.find({ userId }).sort({ date: -1 }).exec();
  }

  // Service
  async createService(userId: string, dto: any) {
    return this.serviceModel.create({ ...dto, userId });
  }

  async getServices(userId: string) {
    return this.serviceModel.find({ userId }).sort({ date: -1 }).exec();
  }
}
