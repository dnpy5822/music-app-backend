import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTestDto } from './dto/test.dto';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('appService', this.appService);
  }

  @Get()
  home() {
    return this.appService;
  }

  @Get(':id')
  @Patch()
  @HttpCode(HttpStatus.NO_CONTENT)
  get(@Param('id') id: string, @Query('limit') limit: number = 30) {
    return [{ num: id, limit: limit }];
  }

  @Post()
  @Header('X-Den-headers', '1')
  create(@Body() dto: CreateTestDto): Promise<any> {
    const id = 1;
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve([{ id, ...dto }]), 3000),
    );
  }
}
