import { Body, Controller, Delete, Get, Param, Post, Put, Query, Response, UseGuards } from "@nestjs/common";
import { FilmsService } from "./films.service";
import { AuthorGuard } from "src/guard/author.guard";
type film = {
    nameFilm:string
    idFilm:number
    releaseDate:string
    duration:string
    imageFilm:string
    detailFilm:string
    trailer:string
}
@Controller()
export class FilmsController {
    constructor(
        private readonly filmsService: FilmsService

    ) {}

    @Get("films")
    async getAll(@Response() response: any) {
        const result = await this.filmsService.getAll();
        response.status(200).json({
            data: result,
            message: "success"
        });
    }
    
    @Get("getFilmUpdate/:id")

    async getFilmUpdate(@Param("id") id: number, @Response() response: any) {
        // console.log(id)
        const result = await this.filmsService.getFilmUpdate(id);
        // console.log(result)
        response.status(200).json({
            data: result,
            message: "success"
        });
    }

    @Post("addFilm")
    // @UseGuards(AuthorGuard)
    async addFilm(@Body() body: any, @Response() response: any) {
        // console.log(body.arr)
        const film = {
            nameFilm: body.nameFilm,
            releaseDate: body.releaseDate,
            duration: body.duration,
            imageFilm: body.imageFilm,
            detailFilm: body.detailFilm,
            trailer: body.trailer
        }
        const result = await this.filmsService.addFilm({film: film, arrCategory: body.arr});
        response.status(200).json({
            data: result,
            message: "insert success"
        });
    }

    @Put("updateFilm/:id")

    async updateFilm(@Param("id") id: number, @Body() body: any, @Response() response: any) {
        // console.log(id,body)
        const film = {
            nameFilm: body.nameFilm,
            releaseDate: body.releaseDate,
            duration: body.duration,
            imageFilm: body.imageFilm,
            detailFilm: body.detailFilm,
            trailer: body.trailer
        }
        const result = await this.filmsService.updateFilm(id, film);
        response.status(200).json({
            data: result,
            message: "update success"
        });
    }

    @Delete("deletefilm/:id")
    // @UseGuards(AuthorGuard)
    async deletefilm(@Param("id") id: number, @Response() response: any) {
        // console.log(id)
        const result = await this.filmsService.deletefilm(id);
        response.status(200).json({
            data: result,
            message: "delete success"
        });
    }
    @Get("getFilmChoose/:day")
    async getFilmChoose(@Param("day") day: string, @Response() response: any) {
        // console.log(day)
        try {
            const now:string = day
            console.log(now)
            const result = await this.filmsService.getAll()
            // console.log(result[0])
            // console.log(result[0][0].releaseDate.split('T')[0].split('-').join(''))
            let arr:film[] = []
            result.map((item:film)=>{
                if (item.releaseDate.split('T')[0].split('-').join('') <= now.split('-').join('')) {
                    arr.push(item)      
                }
            })
            // console.log(arr)
            response.status(200).json({message:"success",data:arr})
        } catch (error) {
            response.status(400).json({message:"server error"})
        }
    }
    @Get("getFilmSetup/:id")

    async getFilmSetup(@Response() response: any ,@Param("id") id: number) {
        // console.log(id)
        const result = await this.filmsService.getFilmUpdate(id);
        response.status(200).json({
            data: result,
            message: "success"
        });
    }
    @Get("filmComing")
    async get(@Response() response: any) {
        const now = new Date()
        try {
            const result:any = await this.filmsService.getAll()
            // console.log(result)
            let arr:film[] = []
            result.forEach((element:film) => {
                if( element.releaseDate.split('-').join('') >= now.toISOString().split('T')[0].split('-').join('')){
                    arr.push(element)
                }
            })
            response.status(200).json({
                data:arr,
                message:"Success"
            })
        } catch (error) {
            response.status(500).json({
                message:"error server"
            })
        }

    }
    
    @Get("filmNowShowing")
    async geta(@Response() response: any) {
        const now = new Date()
        try {
            const result:any = await this.filmsService.getAll()
            // console.log(result)
            let arr:film[] = []
            result.forEach((element:film) => {
                if( element.releaseDate.split('-').join('') <= now.toISOString().split('T')[0].split('-').join('')){
                    arr.push(element)
                }
            })
            response.status(200).json({
                data:arr,
                message:"Success"
            })
        } catch (error) {
            response.status(500).json({
                message:"error server"
            })
        }

    }
    @Get("sortASCFilms")
    async sortASCFilms(@Response() response: any) {
        const result = await this.filmsService.sortASCFilms();
        response.status(200).json({
            data: result,
            message: "success"
        });
    }
    @Get("sortDESCFilms")
    async sortDESCFilms(@Response() response: any) {
        const result = await this.filmsService.sortDESCFilms();
        response.status(200).json({
            data: result,
            message: "success"
        });
    }
    @Get("findFilm")
    async  findFilm(@Response() response: any, @Query() query: any) {
        console.log(query.nameFilm)
        const result = await this.filmsService.findFilm(query);
        response.status(200).json({
            data: result,
            message: "success"
        });
    }
}