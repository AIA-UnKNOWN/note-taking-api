import { Connection } from 'mongoose';
import { NoteSchema } from './note.scheme';
import { MONGODB_CONNECTION } from 'src/database/database.providers';

export const NOTE_MODEL = 'NOTE_MODEL';
export const notesProviders = [
  {
    provide: NOTE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Note', NoteSchema),
    inject: [MONGODB_CONNECTION],
  },
];
