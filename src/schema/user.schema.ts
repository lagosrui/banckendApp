import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ default: false })
  kycVerified: boolean;

  @Prop()
  polygonAddress: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;

