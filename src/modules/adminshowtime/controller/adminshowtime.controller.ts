import { Body, Controller, Get, Param, Post, Query, Response } from "@nestjs/common";
import { AdminshowtimeService } from "../service/adminshowtime.service";

@Controller()
export class AdminshowtimeController {

    constructor(
       private readonly adminshowtimeService: AdminshowtimeService 
    ) {}

    @Get("getAllDayShowTime")

    async getAll(@Response() response: any) {
        const result = await this.adminshowtimeService.getAll()
        response.status(200).json({
            data: result,
            message: "success"
        })
    }

    @Post("checkShowTime")

    async checkShowTime(@Response() response: any,@Body() body: any) {
        console.log(body)
        const result = await this.adminshowtimeService.checkShowTime(body)
        console.log(result)
        response.status(200).json({
            data: result,
            message: "success"
        })
    }

    @Post("addShowTime")

    async addShowTime(@Response() response: any,@Body() body: any) {
        console.log(body.data)
        
        await Promise.all(body.data.map(async (item: any) => {
            await this.adminshowtimeService.addShowTime({
                films: Number(item.idFilm),
                room: Number(item.idRoom),
                showtime: Number(item.idShowTime),
                date_show: item.date_show,
                duration: item.duration
            })
        }))
        const result = await this.adminshowtimeService.getAll()
        console.log(result)
        response.status(200).json({
            data: result,
            message: "success"
        })
    }

    @Get("getfilmBuyTicket/:id")

    async getfilmBuyTicket(@Response() response: any,@Param("id") id: number) {
        console.log(id)
        const result = await this.adminshowtimeService.getfilmBuyTicket(id)
        console.log(result)
        response.status(200).json({
            data: result,
            message: "success"
        })
    }
    @Get("checkTicket")

    async checkTicket(@Response() response: any,@Query() query: any) {
        console.log(query)
        const result = await this.adminshowtimeService.checkTicket(query)
        console.log(result[0].date_show.split("-").join(""))
        const arr:any = []
        result.forEach((item: any) => {
            if(item.date_show.split("-").join("") == query.date_show) {
                arr.push(item)
            }
        })
        response.status(200).json({
            data: arr,
            message: "success"
        })
    }
    @Get("getFilmTicket/:id")

    async getFilmTicket(@Response() response: any,@Param("id") id: number) {
        console.log(id)
        const result = await this.adminshowtimeService.getFilmTicket(id)
        console.log(result)
        response.status(200).json({
            data: result,
            message: "success"
        })
    }

}