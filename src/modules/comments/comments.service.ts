import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comments } from "src/entities/comments.entity";
import { Repository } from "typeorm";

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comments) private readonly commentsRepository: Repository<Comments>
    ) {}


    async addComment(body: any) {
        const result = await this.commentsRepository.createQueryBuilder('comments')
        .insert()
        .into(Comments)
        .values({
            comment: body.comment,
            rate: body.rate,
            users: body.idUser,
            films: body.idFilm
        })
        .execute()
        const arr = await this.getAll()
        return arr
    }

    async getAll() {
        const result = await this.commentsRepository.createQueryBuilder('comments')
        .innerJoinAndSelect("comments.users", "Users")
        .innerJoinAndSelect("comments.films", "Films")
        .getMany();
        return result
    }

}