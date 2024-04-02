import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Showtime } from "src/entities/showtime.entity";
import { ShowtimeController } from "./showtime.controller";
import { ShowtimeService } from "./showtime.service";

@Module({
    imports: [TypeOrmModule.forFeature([Showtime])],
    controllers: [ShowtimeController],
    providers: [ShowtimeService],
    exports: [],
})
export class ShowtimeModule {}