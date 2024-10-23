import { Body, Controller, Get, Headers, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { idPropertyDto } from './dto/idProperty.dto';
import { headerPropertyDto } from './dto/headersProperty.dto';
import { RequestHeader } from './pipes/request-header';

@Controller('property')
export class PropertyController {

  @Get()
  getHello(): string {
    return 'abc'
  }

  @Post(":id")
  findOne(@Param("id",ParseIntPipe) id: number, @Body() body:CreatePropertyDto) {
    return {id, body}
  }

  @Patch("")
  update(@Body() Body:CreatePropertyDto, @RequestHeader(headerPropertyDto) headers:headerPropertyDto) {
    return headers;
  }
  
  
  @Post()
  create(@Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true})) body:CreatePropertyDto){
    return body
  }

  
}
