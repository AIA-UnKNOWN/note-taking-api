import { Inject, Injectable } from '@nestjs/common';
import { NOTE_MODEL } from './notes.providers';
import { Model } from 'mongoose';
import { Note, NoteDto } from './note.interface';

@Injectable()
export class NotesService {
  constructor(
    @Inject(NOTE_MODEL)
    private noteModel: Model<Note>,
  ) {}

  create(noteData: NoteDto) {
    return this.noteModel.insertMany([noteData]);
  }

  getAll() {
    return this.noteModel.find({});
  }

  getOne(noteId: number) {
    // Add exception for 'CastError' later
    return this.noteModel.findOne({
      _id: noteId,
    });
  }
}
