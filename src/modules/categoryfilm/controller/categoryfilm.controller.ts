import { Body, Controller, Get, Param, Post, Put, Response } from "@nestjs/common";
import { CategoryfilmService } from "../service/categoryfilm.service";
import { categoryDto } from "src/dtos/category.dto";
type setActive = {
    idCategory: number
    active: number
}

@Controller()
export class CategoryfilmController {
    constructor(
        private readonly categoryfilmService: CategoryfilmService
    ) {}

    @Get("category")
    async getCategory(@Response() response: any) {
        const result = await this.categoryfilmService.getCategory();
        response.status(200).json({
            data: result,
            message: "success"
        });
        return result
    }

    @Post("addCategory")
    async addCategory(@Body() body: categoryDto, @Response() response: any) {
        const result = await this.categoryfilmService.insertCategory(body);
        response.status(200).json({
            data: result,
            message: "insert success"
        });
    }
    @Put("categoryActive")
    async categoryActive(@Body() body: setActive, @Response() response: any) {
        console.log(body)
        const result = await this.categoryfilmService.categoryActive(body);
        response.status(200).json({
            data: result,
            message: "update success"
        });
    }

}