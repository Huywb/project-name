import { Expose } from "class-transformer";
import { IsString } from "class-validator";


export class headerPropertyDto {
    @IsString()
    @Expose({name:'access-token'})
    accessToken : string
}