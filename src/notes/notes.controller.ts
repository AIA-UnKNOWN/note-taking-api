import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteDto } from './note.interface';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getAll() {
    return this.notesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') noteId: number) {
    return `Note ${noteId}`;
  }

  @Post()
  create(@Body() noteData: NoteDto) {
    return this.notesService.create(noteData);
  }

  @Put(':id')
  update(@Param('id') noteId: number) {
    return `Update note ${noteId}`;
  }

  @Delete(':id')
  remove(@Param('id') noteId: number) {
    return `Delete note ${noteId}`;
  }
}
