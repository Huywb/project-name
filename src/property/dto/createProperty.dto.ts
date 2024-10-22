import { IsInt, isString, IsString, Length } from "class-validator";

export class CreatePropertyDto{
    @IsString()
    @Length(2,10,{message:"error length"})
    name: string;

    @IsString()
    description: string;

    @IsInt()
    area: number
}