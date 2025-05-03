import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateFuelExpenseInput {
  @Field()
  vehicleId: string;

  @Field(() => Float)
  cost: number;

  @Field(() => Float)
  liters: number;

  @Field(() => Float)
  mileage: number;

  @Field()
  date: Date;

  @Field({ nullable: true })
  notes?: string;
}
