import { Body, Controller, Get, Param, Post, Response } from "@nestjs/common";
import { MessagesService } from "./messages.service";

@Controller()
export class MessagesController {
    constructor(
        private readonly  messagesService: MessagesService
    ) {}
    @Get("getMessageChat/:room")
    async getMessageChat(@Param("room") room: number,@Response() response: any) {
        const result = await this.messagesService.getMessageChat(room);
        response.status(200).json({
            data: result,
            message: "success"
        })
    }
    @Post("sendMess")

    async sendMess(@Response() response: any,@Body() body: any) {
        console.log(body)
        const result = await this.messagesService.sendMess(body);
        response.status(200).json({
            data: result,
            message: "success"
        })
    }

}