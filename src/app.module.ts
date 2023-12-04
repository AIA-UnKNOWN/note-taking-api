import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), NotesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
