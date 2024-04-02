import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Price } from "src/entities/price.entity";
import { Repository } from "typeorm";

@Injectable()
export class PriceService {
    constructor(
        @InjectRepository(Price) private readonly priceRepository: Repository<Price>
    ) {}
    async getAll() {
        return await this.priceRepository.find();
    }
}