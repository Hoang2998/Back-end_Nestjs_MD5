import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class adminshowtimeDto {
    idSetupFilm?:number;
    idFilm?:number;
    idRoom?:number;
    idShowTime:number;
    date_show?:string;
    duration?:string;
    nameFilm?:string;
    nameRoom?:String;
    showTimeAt?:String;
}