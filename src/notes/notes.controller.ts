import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NotesService } from './notes.service';

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
  create() {
    return 'Create a note';
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
