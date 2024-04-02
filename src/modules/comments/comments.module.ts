import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comments } from "src/entities/comments.entity";
import { CommentsController } from "./comments.controller";
import { CommentsService } from "./comments.service";

@Module({
    imports: [TypeOrmModule.forFeature([Comments])],
    controllers: [CommentsController],
    providers: [CommentsService],
    exports: []
})
export class CommentsModule { }