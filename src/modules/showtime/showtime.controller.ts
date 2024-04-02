import { Controller, Get, Response } from "@nestjs/common";
import { ShowtimeService } from "./showtime.service";

@Controller()
export class ShowtimeController {
    constructor(
        private readonly showtimeService: ShowtimeService
    ) {}

    @Get("getShowtime")
    async getShowtime(@Response() response: any) {
        // console.log("11111")
        const result = await this.showtimeService.getShowtime();
        response.status(200).json({
            message:"success",
            data: result
        })
    }
}