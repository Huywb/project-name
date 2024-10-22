import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {

  @Get()
  getHello(): string {
    return 'abc'
  }

  @Post(":id")
  findOne(@Param("id",ParseIntPipe) id:string, @Body() body) {
    return {id, body}
  }

  
  
  @Post()
  create(@Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true})) body:CreatePropertyDto){
    return body
  }

  
}
