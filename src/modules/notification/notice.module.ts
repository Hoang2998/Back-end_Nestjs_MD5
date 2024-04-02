import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Notification } from "src/entities/notification.entity";
import { NotificationController } from "./notice.controller";
import { NotificationService } from "./notice.service";

@Module({
    imports: [TypeOrmModule.forFeature([Notification])],
    controllers: [NotificationController],
    providers: [NotificationService],
    exports: []
})
export class NotificationModule {}