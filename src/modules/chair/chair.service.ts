import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Chair } from "src/entities/chair.entity";
import { Repository } from "typeorm";

@Injectable()
export class ChairService {
    constructor(
        @InjectRepository(Chair) private readonly chairRepository: Repository<Chair>
        ) {}

    async getAll() {
        return await this.chairRepository.find();
    }
}