import { Module } from "@nestjs/common";
import { AdminshowtimeController } from "./controller/adminshowtime.controller";
import { AdminshowtimeService } from "./service/adminshowtime.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Adminshowtime } from "src/entities/adminshowtime.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Adminshowtime])],
    controllers: [AdminshowtimeController],
    providers: [AdminshowtimeService],
    exports: [],
})
export class AdminshowtimeModule {}