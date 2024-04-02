import { Body, Controller, Get, Param, Post, Response } from "@nestjs/common";
import { FriendsService } from "./friends.service";

@Controller()
export class FriendsController {
    constructor(
        private readonly friendsService: FriendsService
    ) {}

    @Get("onlineUser/:id")
    async getOnlineUser(@Param("id") id: number,@Response() response: any) {
        console.log(id)
        const result = await this.friendsService.getOnlineUser(id);
        console.log(result)
        response.status(200).json({
            data: result,
            message: "success"
        })
    }
    @Post("addFriends")
    async addFriends(@Response() response: any,@Body() body: any) {
        console.log(body)
        const result = await this.friendsService.addFriends(body);
        response.status(200).json({
            data: result,
            message: "success"
        })
    }
}