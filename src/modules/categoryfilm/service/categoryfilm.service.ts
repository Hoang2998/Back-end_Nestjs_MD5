import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { categoryDto } from "src/dtos/category.dto";
import { Category } from "src/entities/category.entity";
import { Repository } from "typeorm";

type setActive = {
    idCategory: number
    active: number
}
@Injectable()
export class CategoryfilmService {

    constructor(
        @InjectRepository(Category) private readonly categoryfilmRepository: Repository<Category>
    ) {}

    async getCategory() {
        return await this.categoryfilmRepository.find();
    }

    async insertCategory(category:categoryDto) {
        await this.categoryfilmRepository.createQueryBuilder('category')
        .insert()
        .values(category)
        .execute();
        const result = await this.categoryfilmRepository.find();
        return result
    }

    async categoryActive(category:setActive) {
        console.log(category)
        await this.categoryfilmRepository.createQueryBuilder('category')
        .update()
        .set({status: category.active})
        .where("idCategory = :idCategory", {idCategory: category.idCategory})
        .execute();
        const result = await this.categoryfilmRepository.find();
        return result
    }

    async getAll() {
        const result = await this.categoryfilmRepository.find();
        return result
    }

}