import { Module, Post } from "@nestjs/common";
import { PostsController } from "./controller/posts.controller";
import { PostsService } from "./service/posts.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Posts } from "src/entities/posts.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Posts])],
    controllers: [PostsController],
    providers: [PostsService],
    exports: [PostsModule],
})
export class PostsModule {}