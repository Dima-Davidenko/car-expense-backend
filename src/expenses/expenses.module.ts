import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FuelExpense, FuelExpenseSchema } from './schemas/fuel-expense.schema';
import { RepairLog, RepairLogSchema } from './schemas/repair-log.schema';
import { ServiceLog, ServiceLogSchema } from './schemas/service-log.schema';
import { ExpensesController } from './expenses.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FuelExpense.name, schema: FuelExpenseSchema },
      { name: RepairLog.name, schema: RepairLogSchema },
      { name: ServiceLog.name, schema: ServiceLogSchema },
    ]),
  ],
  controllers: [ExpensesController],
})
export class ExpensesModule {}
