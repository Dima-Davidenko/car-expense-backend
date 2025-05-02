import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class RepairLog extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  vehicleId: string;

  @Prop({ required: true })
  cost: number;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  mileage: number;

  @Prop({ required: true })
  description: string;

  @Prop()
  notes?: string;
}

export const RepairLogSchema = SchemaFactory.createForClass(RepairLog);
