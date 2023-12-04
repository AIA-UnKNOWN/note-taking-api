import { Document } from 'mongoose';

export interface Note extends Document {
  readonly title: string;
  readonly content: string;
}

export type NoteDto = {
  title: string;
  content: string;
};
