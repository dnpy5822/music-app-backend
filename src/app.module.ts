import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyModule } from './modules/spotify/spotify.module';
require('dotenv').config();

@Module({
  imports: [SpotifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
