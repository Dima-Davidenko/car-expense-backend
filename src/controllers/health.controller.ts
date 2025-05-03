import { Controller, Head } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FuelExpense } from '@/src/expenses/schemas/fuel-expense.schema';

@Controller('health')
export class HealthController {
  constructor(
    @InjectModel(FuelExpense.name)
    private readonly fuelExpenseModel: Model<FuelExpense>,
  ) {}

  @Head()
  async check(): Promise<void> {
    // Lightweight query to ensure DB connection is alive
    await this.fuelExpenseModel.findOne().lean().exec();
  }
}
