import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { itemPropertyDto } from 'src/property/dto/itemProperty.dto';
import { Item } from 'src/Schema/item.schema';

@Injectable()
export class ItemService {
    constructor(@InjectModel(Item.name) private itemModel: mongoose.Model<Item>){}

    async getItem(): Promise<Item[]> {
        return this.itemModel.find().exec(); // Fetch all items from the database
    }

    // Get an item by ID
    async getItemById(id: number): Promise<Item> {
        const item = await this.itemModel.findById(id).exec(); // Find the item by ID
        if (!item) {
            throw new NotFoundException(`Item with ID ${id} not found`); // Throw an error if not found
        }
        return item; // Return the found item
    }

    // Create a new item
    async createItem(data: itemPropertyDto): Promise<Item> {
        const newItem = new this.itemModel(data); // Create a new instance of the item model
        return newItem.save(); // Save the item to the database
    }

    // Delete an item by ID
    async deleteItem(id: number): Promise<Item> {
        const deletedItem = await this.itemModel.findByIdAndDelete(id).exec(); // Find and delete the item
        if (!deletedItem) {
            throw new NotFoundException(`Item with ID ${id} not found`); // Throw an error if not found
        }
        return deletedItem; // Return the deleted item
    }
}
