import { Controller, Get } from '@nestjs/common';
import { ServiceClientPayload } from 'src/modules/serviceClient/serviceClient.interface';
import { SpotifyService } from '../services/spotify.service';

@Controller('spotify')
export class SpotifyController {
  constructor(public readonly spotifyService: SpotifyService) {}

  @Get()
  spotifyInfo() {
    return this.spotifyService.getSpotify();
  }
}
