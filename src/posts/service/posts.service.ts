import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Posts } from "src/entities/posts.entity";
import { Repository } from "typeorm";


@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Posts) private readonly postsRepository: Repository<any>,
    ){}

    async addPost(body: any) {
        const result = await this.postsRepository.createQueryBuilder('post')
        .insert()
        .values({
            users:body.idUser,
            content:body.content,
            imagePost:body.imagePost
        })
        .execute();
        return result
    }
}