import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home() {
    return 'Welcome to my Movie API';
  }

  @Get('/hello')
  sayHello(): string {
    return 'Hello everyone';
  }
}
