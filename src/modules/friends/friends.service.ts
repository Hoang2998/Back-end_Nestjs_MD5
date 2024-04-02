import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Friends } from "src/entities/friends.entity";
import { Repository } from "typeorm";


@Injectable()
export class FriendsService {
    constructor(
        @InjectRepository(Friends) private friendsRepository: Repository<Friends>
    ){}

    async getOnlineUser(id: number) {
        const result = await this.friendsRepository.createQueryBuilder('friends')
        .innerJoinAndSelect('friends.idGive', 'Users')
        .where('friends.idSend = :id', {id})
        .where('friends.status = :status', {status: 1})
        .getMany();
        return result
    }

    async addFriends(body) {
        const result = await this.friendsRepository.createQueryBuilder('friends')
        .insert()
        .into(Friends)
        .values(body)
        .execute();
        return result
    }
}
