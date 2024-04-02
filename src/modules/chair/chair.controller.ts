import { Controller, Get, Response } from "@nestjs/common";
import { ChairService } from "./chair.service";

@Controller()
export class ChairController {

    constructor(
        private readonly chairService: ChairService
    ) {}

    @Get("getChair")
    async getChair(@Response() response: any) {
        const result = await this.chairService.getAll();
        response.status(200).json({
            data: result,
            message: "success"
        });
    }
}