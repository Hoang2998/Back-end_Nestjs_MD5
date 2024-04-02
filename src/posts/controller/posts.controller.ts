import { Body, Controller, Post, Response } from "@nestjs/common";
import { PostsService } from "../service/posts.service";

@Controller()
export class PostsController {
    constructor(
        private readonly postsService: PostsService
    ) {}

    @Post("addPost")
    async addPost(@Body() body: any,@Response() response: any) {
        console.log(body)
        const result = await this.postsService.addPost(body);
        response.status(201).json({
            message:"insert success",
        })
    }

}