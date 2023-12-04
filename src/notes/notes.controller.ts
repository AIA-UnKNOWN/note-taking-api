import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('notes')
export class NotesController {
  constructor() {}

  @Get()
  getAll() {
    return 'All notes';
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
