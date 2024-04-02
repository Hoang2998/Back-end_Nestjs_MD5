import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Friends } from "src/entities/friends.entity";
import { FriendsController } from "./friends.controller";
import { FriendsService } from "./friends.service";

@Module({
    imports: [TypeOrmModule.forFeature([Friends])],
    controllers: [FriendsController],
    providers: [FriendsService],
    exports: []
})
export class FriendsModule {}