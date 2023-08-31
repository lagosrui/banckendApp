import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Proposal {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  createdBy: string; // Reference to the user ID

  @Prop({ default: 0 })
  fundsRaised: number;
}

export const ProposalSchema = SchemaFactory.createForClass(Proposal);
export type ProposalDocument = Proposal & Document;