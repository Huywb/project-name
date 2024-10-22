import { Controller, Get } from '@nestjs/common';

@Controller('property')
export class PropertyController {

  @Get()
  getHello(): string {
    return 'abc'
  }

  
}
