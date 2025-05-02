import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class FuelExpense extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  vehicleId: string;

  @Prop({ required: true })
  cost: number;

  @Prop({ required: true })
  liters: number;

  @Prop({ required: true })
  mileage: number;

  @Prop({ required: true })
  date: Date;

  @Prop()
  notes?: string;
}

export const FuelExpenseSchema = SchemaFactory.createForClass(FuelExpense);
