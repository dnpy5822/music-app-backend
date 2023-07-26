import { Injectable } from '@nestjs/common';
import { ServiceClientPayload } from 'src/modules/serviceClient/serviceClient.interface';
import { ServiceClient } from 'src/modules/serviceClient/serviceClient.service';

@Injectable()
export class SpotifyService extends ServiceClient {
  getSpotify() {
    return super.get({ url: 'https://jsonplaceholder.typicode.com' });
  }
}
