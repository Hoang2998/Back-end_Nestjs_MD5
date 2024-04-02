import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class categoryDto {
    @IsString()
    @IsNotEmpty()
    name:string

    @IsNumber()
    @IsNotEmpty()
    status:number
} 