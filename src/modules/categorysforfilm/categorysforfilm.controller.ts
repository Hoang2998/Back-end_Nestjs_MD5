import { Body, Controller, Delete, Get, Param, Post, Response } from "@nestjs/common";
import { CategorysforfilmService } from "./categorysforfilm.service";

@Controller()
export class CategorysforfilmController {

    constructor(
        private readonly categorysforfilmService: CategorysforfilmService
    ) {}

    @Get("getCategoryForFilms")
    async getCategoryForFilms(@Response() response: any) {
        console.log("1111111111")
        const result = await this.categorysforfilmService.getCategoryForFilms();

        response.status(200).json({
            data: result,
            message: "success"
        })
        return result
    }
    @Delete("deleteCategoryForFilm/:id")

    async deleteCategoryForFilm(@Param("id") id: number, @Response() response: any) {
        console.log(id)
        const result = await this.categorysforfilmService.deleteCategoryForFilm(id);
        response.status(200).json({
            message: "delete success"
        })
    }
    @Post("addCategoryForFilm")

    async addCategoryForFilm(@Body() body: any, @Response() response: any) {
        console.log(body)
        await Promise.all(body.arr.map(async (item: any) => {
            const result = await this.categorysforfilmService.addCategoryForFilm(body.idFilm, item);
        }))
        const result = await this.categorysforfilmService.getCategoryForFilms();
        response.status(200).json({
            data: result,
            message: "update success"
        })
    }
}