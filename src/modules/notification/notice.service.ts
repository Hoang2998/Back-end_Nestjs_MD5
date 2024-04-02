import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Notification } from "src/entities/notification.entity";
import { Repository } from "typeorm";

@Injectable()
export class NotificationService {

    constructor(
        @InjectRepository(Notification) private readonly notificationRepository: Repository<Notification>
    ) {}
    async readed(body) {
        console.log(body)
        console.log("1111111111111111111111111111",body.idGive)
        const result = await this.notificationRepository.createQueryBuilder('notification')
        .update()
        .set({readed: 1})
        .where("notification.idGive = :id", {id: body[0].idGive})
        .execute();
        return result
    }
}