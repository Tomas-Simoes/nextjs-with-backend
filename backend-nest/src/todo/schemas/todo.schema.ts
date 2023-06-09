import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  title: string;

  @Prop()
  description?: string;

  @Prop()
  completedAt?: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
