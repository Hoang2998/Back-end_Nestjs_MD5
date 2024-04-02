import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Messages } from "src/entities/messages.entity";
import { Repository } from "typeorm";


@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Messages) private friendsRepository: Repository<Messages>
    ){}

    async getMessageChat(room: number) {
        const result = await this.friendsRepository.createQueryBuilder('messages')
        .innerJoinAndSelect('messages.idGive', 'Users')
        .where('messages.room = :room', {room})
        .getMany();
        return result
    }
    async sendMess(body) {
        const result = await this.friendsRepository.createQueryBuilder('messages')
        .insert()
        .into(Messages)
        .values({
            idGive: body.idGive,
            idSend: body.idSend,
            room: body.room,
            contents: body.message
        })
        .execute();
        return result
    }
}