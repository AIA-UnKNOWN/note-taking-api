import { Inject, Injectable } from '@nestjs/common';
import { NOTE_MODEL } from './notes.providers';
import { Model } from 'mongoose';
import { Note } from './note.interface';

@Injectable()
export class NotesService {
  constructor(
    @Inject(NOTE_MODEL)
    private noteModel: Model<Note>,
  ) {}

  create() {
    return 'Create note';
  }

  findAll() {
    return 'Get all notes';
  }
}
