import { Body, Controller, Get, Post, Request, Response, UseGuards } from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { AuthGuard } from "src/guard/auth.guard";
import { GuardsConsumer } from "@nestjs/core/guards";
import { getUser } from "src/decorator/user.decorator";


@Controller()
export class TicketController {
    constructor(
        private readonly ticketService: TicketService
    ) {}

    @Get("getTicket")
    async getTicket(@Response() response: any) {
        // console.log("11111111")
        const result = await this.ticketService.getAll();
        response.status(200).json({
            data: result,
            message: "success"
        });
    }

    @Get("getTicketsUser")
    @UseGuards(AuthGuard)
    async getTicketsUser(@Response() response: any,@Request() req: any,@getUser() user: any) {
        const result = await this.ticketService.getTicketsUser(user.id);
        response.status(200).json({
            data: result,
            message: "success"
        });
    }

    @Post("bookingTicket")

    async bookingTicket(@Body() body: any, @Response() response: any) {
        console.log(body)
        try {
            await Promise.all(body.price.map(async (item: any,index:number) => {
                await this.ticketService.addTicket({
                    adminshowtime: Number(body.newTicket.idAdminShowTime),
                    chair: Number(body.chairTicket[index]),
                    users: Number(body.newTicket.idUser),
                    price: item,
                    dateBuy: body.newTicket.dateBuy
                })
            }))
            response.status(200).json({
                message: "payment success"
            })
        } catch (error) {
            response.status(400).json({
                message: error
            })
        }
    }
}