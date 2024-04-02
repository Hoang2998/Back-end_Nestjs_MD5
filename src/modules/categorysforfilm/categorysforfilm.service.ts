import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoryforfilms } from "src/entities/categoryforfilm.entity";
import { Repository } from "typeorm";


@Injectable()
export class CategorysforfilmService {

    constructor(
        @InjectRepository(Categoryforfilms) private readonly categoryforfilmsRepository: Repository<Categoryforfilms>,
    ) {}

    async getCategoryForFilms() {
        const result = await this.categoryforfilmsRepository.createQueryBuilder('categoryforfilms')
        .innerJoinAndSelect("categoryforfilms.category", "Category")
        .innerJoinAndSelect("categoryforfilms.films", "Films")
        .getMany()
        console.log(result)
        return result
    }

    async deleteCategoryForFilm(id: number) {
        const result = await this.categoryforfilmsRepository.createQueryBuilder('categoryforfilms')
        .delete()
        .from(Categoryforfilms)
        .where("idFilm = :id", {id})
        .execute();
        return result
    }

    async addCategoryForFilm(idFilm: number, idCategory: number) {
        const result = await this.categoryforfilmsRepository.create({
            films: idFilm as any,
            category: idCategory  as any
        })
        await this.categoryforfilmsRepository.save(result)
        return result
    }
}