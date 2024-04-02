import { Body, Controller, Patch, Response } from "@nestjs/common";
import { NotificationService } from "./notice.service";

@Controller()
export class NotificationController {

    constructor(
        private readonly notificationService: NotificationService
    ) {}

    @Patch("readed")
    async readed(@Response() response: any,@Body() body: any) {
        const {arr} = body
        const result = await this.notificationService.readed(arr);
        response.status(200).json({
            data: result,
            message: "success"
        })
    }
}