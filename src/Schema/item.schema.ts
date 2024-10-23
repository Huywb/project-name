import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps:true
})
export class Item {
    @Prop( )
    title: string;

    @Prop( )
    author: string;

    @Prop( )
    price: number;

}

export const ItemSchema = SchemaFactory.createForClass(Item)