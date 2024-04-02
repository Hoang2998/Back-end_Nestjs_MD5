import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Price } from "src/entities/price.entity";
import { PriceController } from "./price.controller";
import { PriceService } from "./price.service";

@Module({
    imports: [TypeOrmModule.forFeature([Price])],
    controllers: [PriceController],
    providers: [PriceService],
    exports: [],
})
export class PriceModule {}