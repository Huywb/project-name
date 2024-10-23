import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from 'src/Schema/item.schema';
import { itemPropertyDto } from 'src/property/dto/itemProperty.dto';

@Controller('item')
export class ItemController {
    constructor(private readonly ItemService : ItemService){}

    @Get()
    async getItem() : Promise<Item[]> {
        return this.ItemService.getItem()
    }

    @Get(':id')
    async getItemById(@Param('id',ParseIntPipe) id:number) : Promise<Item> {
        return this.ItemService.getItemById(id)
    }

    @Post()
    async createItem(@Body() body:itemPropertyDto) : Promise<Item> {
        return this.ItemService.createItem(body)
    }

    @Delete(':id')
    async deleteItem(@Param('id',ParseIntPipe) id:number) : Promise<Item> {
        return this.ItemService.deleteItem(id)
    }


}
