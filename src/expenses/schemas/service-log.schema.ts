import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ServiceLog extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  vehicleId: string;

  @Prop({ required: true })
  serviceType: string; // e.g. 'oil change', 'tire rotation'

  @Prop({ required: true })
  cost: number;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  mileage: number;

  @Prop()
  notes?: string;
}

export const ServiceLogSchema = SchemaFactory.createForClass(ServiceLog);
