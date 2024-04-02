import { IsEmpty, IsInt, IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";
import { IsNull } from "typeorm";


export class userDto {
    // @IsNumber()
    @IsEmpty()
    idUser: number

    @IsString()
    @IsNotEmpty({
        message: 'nameUser is required'
    })
    nameUser: string

    @IsString()
    @IsNotEmpty({
        message: 'email is required'
    })
    @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
        message: 'email is not valid'
    })
    email: string

    @IsString()
    @IsNotEmpty()
    passwords: string

  
    @IsEmpty()
    avatar: string

  
    @IsEmpty()
    phoneNumber: string

    @IsEmpty()
    active: number

    @IsEmpty()
    role: number
}