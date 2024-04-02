import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Chair } from "src/entities/chair.entity";
import { ChairController } from "./chair.controller";
import { ChairService } from "./chair.service";

@Module({
    imports: [TypeOrmModule.forFeature([Chair])],
    controllers: [ChairController],
    providers: [ChairService],
    exports: [],
})
export class ChairModule {}