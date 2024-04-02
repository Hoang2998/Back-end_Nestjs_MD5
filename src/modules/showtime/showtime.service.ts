import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Showtime } from "src/entities/showtime.entity";
import { Repository } from "typeorm";

@Injectable()
export class ShowtimeService {
    constructor(
        @InjectRepository(Showtime) private readonly showtimeRepository: Repository<Showtime>
    ) {}
    async getShowtime() {
        return await this.showtimeRepository.find();
    }
}