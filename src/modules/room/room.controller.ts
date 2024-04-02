import { Controller, Get, Response } from "@nestjs/common";
import { RoomService } from "./room.service";

@Controller()
export class RoomController {
    constructor(
        private readonly roomService: RoomService
    ) {}
    @Get("getRoom")
    async getRoom(@Response() response: any) {
        // console.log("11111")
        const result = await this.roomService.getRoom();
        response.status(200).json({
            message:"success",
            data: result
        })
       
    }
}