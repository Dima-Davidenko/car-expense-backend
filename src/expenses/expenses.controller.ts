import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { FirebaseAuthGuard } from '../auth/firebase-auth.guard';

@Controller('expenses')
@UseGuards(FirebaseAuthGuard)
export class ExpensesController {
  @Get()
  getExpenses(@Req() req) {
    return {
      message: 'Expenses retrieved successfully',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      uid: req.user.uid,
    };
  }
}
