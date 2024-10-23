import { IsNumber, IsString } from "class-validator";


export class itemPropertyDto {
    @IsString()
    title:string;

    @IsString()
    author: string;

    @IsNumber()
    price: number
}