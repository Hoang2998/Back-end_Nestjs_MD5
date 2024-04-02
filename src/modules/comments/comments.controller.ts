import { Body, Controller, Get, Post, Response } from "@nestjs/common";
import { CommentsService } from "./comments.service";

@Controller()
export class CommentsController {
    constructor(
        private readonly commentsService: CommentsService
    ) {}
    @Get("getAllComment")
    async getAllComment(@Response() response: any) {
        const result = await this.commentsService.getAll()
        response.status(200).json({
            message:" success",
            data:result
        })
    }

    @Post("addComment")
    async addComment(@Body() body: any, @Response() response: any) {
         console.log(body)
        const result = await this.commentsService.addComment(body)
        response.status(200).json({
            message:"insert success",
            data:result
        })       
    }
}