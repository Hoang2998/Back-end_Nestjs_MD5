import { Controller, Get, Response } from "@nestjs/common";
import { PriceService } from "./price.service";

@Controller()
export class PriceController {

    constructor(
        private readonly priceService: PriceService
    ) {}
    @Get("getPrice")
    async getPrice(@Response() response: any) {
        console.log("11111")
        const result = await this.priceService.getAll();
        response.status(200).json({
            data: result,
            message: "success"
        });
    }

}