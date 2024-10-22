import { IsNumber, IsPositive } from "class-validator";

export class idPropertyDto{
    @IsNumber()
    @IsPositive()
    id: string
}