import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { DatabaseModule } from 'src/database/database.module';
import { notesProviders } from './notes.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [NotesController],
  providers: [NotesService, ...notesProviders],
})
export class NotesModule {}
