import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class FuelExpense {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

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
