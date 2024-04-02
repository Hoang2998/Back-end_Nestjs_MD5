import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ticket } from "src/entities/ticket.entity";
import { Repository } from "typeorm";

@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(Ticket) private readonly ticketRepository: Repository<Ticket>
    ) {}

    async getAll() {
        const result = await this.ticketRepository.createQueryBuilder('ticket')
        .innerJoinAndSelect("ticket.chair", "Chair")
        .innerJoinAndSelect("ticket.users", "User")
        .innerJoinAndSelect("ticket.adminshowtime", "Adminshowtime")
        .getMany();
        return result
    }
    async getTicketsUser(id: number) {
        const result = await this.ticketRepository.createQueryBuilder('ticket')
        .innerJoinAndSelect("ticket.chair", "Chair")
        .innerJoinAndSelect("ticket.users", "User")
        .innerJoinAndSelect("ticket.adminshowtime", "Adminshowtime")
        .innerJoinAndSelect("Adminshowtime.showtime", "Showtime")
        .innerJoinAndSelect("Adminshowtime.films", "Films")
        .innerJoinAndSelect("Adminshowtime.room", "Room")
        .where("ticket.users = :id", {id})
        .getMany();
        return result
    }
    async addTicket(ticket: any) {
        console.log(ticket)
        const result = await this.ticketRepository.createQueryBuilder('ticket')
        .insert()
        .into(Ticket)
        .values(ticket)
        .execute();
        console.log(result)
        // const result = await this.ticketRepository.find();
        return result
    }
}