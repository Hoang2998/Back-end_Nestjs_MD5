import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Room } from "src/entities/room.entity";
import { Repository } from "typeorm";

@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(Room) private readonly roomRepository: Repository<Room>
    ) {}
    async getRoom() {
        return await this.roomRepository.find();
    }
}