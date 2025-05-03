/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from '@/src/auth/firebase-auth.guard';
import { FuelExpense } from './graphql/fuel-expense.model';
import { CreateFuelExpenseInput } from './graphql/create-fuel-expense.input';
import { ExpensesService } from './expenses.service';
import { CurrentUser } from '@/src/auth/decorators/current-user.decorator';

@Resolver(() => FuelExpense)
@UseGuards(FirebaseAuthGuard)
export class FuelExpenseResolver {
  constructor(private readonly expensesService: ExpensesService) {}

  @Query(() => [FuelExpense])
  async fuelExpenses(@CurrentUser() user: any) {
    return this.expensesService.getFuel(user.uid);
  }

  @Query(() => String)
  healthCheck(): string {
    return 'GraphQL API is up and running';
  }

  @Mutation(() => FuelExpense)
  async addFuelExpense(
    @Args('data') data: CreateFuelExpenseInput,
    @CurrentUser() user: any,
  ) {
    return this.expensesService.createFuel(user.uid, data);
  }
}
