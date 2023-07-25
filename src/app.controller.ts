import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home() {
    return {
      client_id: process.env.spotify_client_id,
      title: this.appService.getHello(),
    };
  }
}
