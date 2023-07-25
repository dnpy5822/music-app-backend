import { Injectable } from '@nestjs/common';

@Injectable()
export class SpotifyService {
  getSpotifyAuth() {
    return { testing: true };
  }
}
