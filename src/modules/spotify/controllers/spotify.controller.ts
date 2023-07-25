import { Controller, Get } from '@nestjs/common';
import { SpotifyService } from '../services/spotify.service';

@Controller('spotify')
export class SpotifyController {
  constructor(public readonly spotifyService: SpotifyService) {}

  @Get()
  spotifyInfo() {
    return this.spotifyService.getSpotifyAuth();
  }
}
